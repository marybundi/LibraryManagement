import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        Library Management System
      </h1>

      <nav>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li>
            <Link
              to="/books"
              className="block bg-blue-600 text-white text-center px-6 py-4 rounded shadow hover:bg-blue-700 transition"
            >
              Books
            </Link>
          </li>
          <li>
            <Link
              to="/members"
              className="block bg-green-600 text-white text-center px-6 py-4 rounded shadow hover:bg-green-700 transition"
            >
              Members
            </Link>
          </li>
          <li>
            <Link
              to="/borrow"
              className="block bg-yellow-500 text-white text-center px-6 py-4 rounded shadow hover:bg-yellow-600 transition"
            >
              Borrow Book
            </Link>
          </li>
          <li>
            <Link
              to="/return"
              className="block bg-red-500 text-white text-center px-6 py-4 rounded shadow hover:bg-red-600 transition"
            >
              Return Book
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
