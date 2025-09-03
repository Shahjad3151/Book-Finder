export default function BookModal({ book, onClose }) {
  if (!book) return null;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          ✖
        </button>
        <img
          src={coverUrl}
          alt={book.title}
          className="w-40 h-56 object-cover rounded mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center">{book.title}</h2>
        <p className="text-center text-gray-600 mb-2">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
        <p className="text-sm text-center text-gray-500">
          First published: {book.first_publish_year || "N/A"}
        </p>
      </div>
    </div>
  );
}
