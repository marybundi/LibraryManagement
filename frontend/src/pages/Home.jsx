import { Link } from "react-router-dom";
import { BookOpen, Users, ArrowDownToLine, ArrowUpFromLine } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Library Management System</h1>
          <p className="text-gray-600">
            Manage your library's books and members efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Books */}
          <Link
            to="/books"
            className="group bg-white border-2 border-black p-8 transition-all duration-300 hover:bg-black hover:text-white text-left rounded"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Books</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Browse and manage book collection
                </p>
              </div>
            </div>
          </Link>

          {/* Members */}
          <Link
            to="/members"
            className="group bg-white border-2 border-black p-8 transition-all duration-300 hover:bg-black hover:text-white text-left rounded"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Members</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  View and manage library members
                </p>
              </div>
            </div>
          </Link>

          {/* Borrow Book */}
          <Link
            to="/borrow"
            className="group bg-white border-2 border-black p-8 transition-all duration-300 hover:bg-black hover:text-white text-left rounded"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ArrowDownToLine className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Borrow Book</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Issue a book to a member
                </p>
              </div>
            </div>
          </Link>

          {/* Return Book */}
          <Link
            to="/return"
            className="group bg-white border-2 border-black p-8 transition-all duration-300 hover:bg-black hover:text-white text-left rounded"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ArrowUpFromLine className="w-8 h-8" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Return Book</h3>
                <p className="text-gray-600 group-hover:text-gray-300">
                  Process book returns
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
