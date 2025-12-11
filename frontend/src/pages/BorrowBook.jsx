import { useState, useEffect } from "react";
import { getBooks, borrowBook } from "../services/bookService";
import { getMembers } from "../services/memberService";

export default function BorrowBook() {
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBooks().then(setBooks);
    getMembers().then(setMembers);
  }, []);

  const handleBorrow = async () => {
    try {
      await borrowBook(bookId, memberId);
      setMessage("Book borrowed successfully!");
    } catch (err) {
      setMessage("Error borrowing book.");
    }
  };

  return (
    <div>
      <h2>Borrow Book</h2>
      <div>
        <label>Book: </label>
        <select value={bookId} onChange={e => setBookId(e.target.value)}>
          <option value="">Select Book</option>
          {books.map(book => (
            <option key={book.id} value={book.id}>{book.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Member: </label>
        <select value={memberId} onChange={e => setMemberId(e.target.value)}>
          <option value="">Select Member</option>
          {members.map(member => (
            <option key={member.id} value={member.id}>{member.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleBorrow}>Borrow</button>
      {message && <p>{message}</p>}
    </div>
  );
}
