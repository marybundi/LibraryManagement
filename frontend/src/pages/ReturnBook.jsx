import { useEffect, useState } from "react";
import { getActiveBorrowings, returnBook } from "../services/borrowingService";
import Navbar from "../components/Navbar";

export default function ReturnBook() {
  const [borrowings, setBorrowings] = useState([]);
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchBorrowings();
  }, []);

  const fetchBorrowings = async () => {
    const data = await getActiveBorrowings();
    setBorrowings(data);
  };

  const handleReturn = async (e) => {
    e.preventDefault();
    if (!bookId || !memberId) {
      setMessage("Please select a book.");
      return;
    }
    try {
      await returnBook(parseInt(bookId), parseInt(memberId));
      setMessage("Book returned successfully!");
      setBookId("");
      setMemberId("");
      fetchBorrowings(); // refresh the list
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
              <div>
                <label htmlFor="book" className="block mb-2">Select Borrowed Book</label>
                <select
                  id="book"
                  className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black bg-white"
                  value={bookId}
                  onChange={(e) => {
                    const selected = borrowings.find(b => b.book.id === parseInt(e.target.value));
                    setBookId(e.target.value);
                    setMemberId(selected?.member.id || "");
                  }}
                  required
                >
                  <option value="">Choose a book...</option>
                  {borrowings.map((b) => (
                    <option key={b.book.id} value={b.book.id}>
                      {b.book.title} - {b.book.author} (Borrowed by: {b.member.name})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 border-2 border-black transition-all duration-300 hover:bg-white hover:text-black"
              >
                Return Book
              </button>

              {message && (
                <p className="mt-4 text-center font-medium text-green-700">{message}</p>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
