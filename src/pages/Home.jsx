import { useState, useEffect } from "react";
import { searchBooks } from "../api/books";
import Search from "../components/Search";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import BookModal from "../components/BookModal";
import Feedback from "../components/Feedback";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const data = await searchBooks(query, page);
      setBooks(data.docs.slice(0, 12));
      setTotalPages(Math.ceil(data.numFound / 100));
    } catch {
      setError("Failed to fetch books. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim()) fetchBooks();
  }, [page]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Search query={query} setQuery={setQuery} onSearch={fetchBooks} />

      {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onClick={() => setSelectedBook(book)} />
        ))}
      </div>

      {!loading && books.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      )}

      {!loading && books.length === 0 && query && (
        <p className="text-center text-gray-500 mt-6">
          No results found for "{query}".
        </p>
      )}

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}

      <Feedback />
    </div>
  );
}
