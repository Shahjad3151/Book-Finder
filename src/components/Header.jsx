export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-slate-900 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">📚 Book Finder</h1>
        <nav className="text-sm opacity-80">Open Library Search</nav>
      </div>
    </header>
  );
}
