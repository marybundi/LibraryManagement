import { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Books</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
