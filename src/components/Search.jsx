export default function Search({ query, setQuery, onSearch }) {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search by book title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded-l-md w-2/3 sm:w-1/2"
      />
      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}
