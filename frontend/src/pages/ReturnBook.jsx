import { useState, useEffect } from "react";
import { getBooks, returnBook } from "../services/bookService";
import { getMembers } from "../services/memberService";

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

  const handleReturn = async () => {
    try {
      await returnBook(bookId, memberId);
      setMessage("Book returned successfully!");
    } catch (err) {
      setMessage("Error returning book.");
    }
  };

  return (
    <div>
      <h2>Return Book</h2>
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
      <button onClick={handleReturn}>Return</button>
      {message && <p>{message}</p>}
    </div>
  );
}
