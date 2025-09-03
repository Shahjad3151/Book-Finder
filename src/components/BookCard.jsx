export default function BookCard({ book, onClick }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-44 object-cover rounded mb-3"
      />
      <h2 className="font-semibold text-center">{book.title}</h2>
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>
    </div>
  );
}
