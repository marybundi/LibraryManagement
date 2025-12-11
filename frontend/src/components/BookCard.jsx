export default function BookCard({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.available ? "Yes" : "No"}</td>
    </tr>
  );
}
