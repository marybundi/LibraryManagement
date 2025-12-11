import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); // to detect current path

  // helper to set active class
  const linkClass = (path) =>
    `px-3 py-2 transition-all duration-200 ${
      location.pathname === path
        ? "text-white border-b-2 border-white"
        : "text-gray-400 hover:text-white hover:border-b-2 hover:border-gray-400"
    }`;

  return (
    <nav className="bg-black text-white border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/books" className={linkClass("/books")}>
              Books
            </Link>
            <Link to="/members" className={linkClass("/members")}>
              Members
            </Link>
            <Link to="/borrow" className={linkClass("/borrow")}>
              Borrow Book
            </Link>
            <Link to="/return" className={linkClass("/return")}>
              Return Book
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
