import { useState, useEffect } from "react";
import { getBooks, returnBook } from "../services/bookService";
import { getMembers } from "../services/memberService";
import Navbar from "../components/Navbar";

export default function ReturnBook() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBooks().then(setBooks);
    getMembers().then(setMembers);
  }, []);

  const handleReturn = async (e) => {
    e.preventDefault();
    if (!bookId || !memberId) {
      setMessage("Please select both book and member.");
      return;
    }
    try {
      await returnBook(bookId, memberId);
      setMessage("Book returned successfully!");
      setBookId("");
      setMemberId("");
    } catch (err) {
      setMessage("Error returning book.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Return Book</h1>

          <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-6" onSubmit={handleReturn}>
              {/* Book Selection */}
              <div>
                <label htmlFor="book" className="block mb-2">
                  Select Borrowed Book
                </label>
                <select
                  id="book"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  value={bookId}
                  onChange={(e) => setBookId(e.target.value)}
                  required
                >
                  <option value="">Choose a book...</option>
                  {books
                    .filter((book) => book.borrowedBy) // show only borrowed books
                    .map((book) => (
                      <option key={book.id} value={book.id}>
                        {book.title} - {book.author} (Borrowed by: {book.borrowedBy})
                      </option>
                    ))}
                </select>
              </div>

              {/* Member Selection */}
              <div>
                <label htmlFor="member" className="block mb-2">
                  Select Member
                </label>
                <select
                  id="member"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  value={memberId}
                  onChange={(e) => setMemberId(e.target.value)}
                  required
                >
                  <option value="">Choose a member...</option>
                  {members.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name} ({member.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 border-2 border-black transition-all duration-300 hover:bg-white hover:text-black"
              >
                Return Book
              </button>

              {/* Feedback Message */}
              {message && (
                <p className="mt-4 text-center font-medium text-green-700">
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
