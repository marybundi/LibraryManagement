import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/books" style={{ marginRight: "10px" }}>Books</Link>
      <Link to="/members" style={{ marginRight: "10px" }}>Members</Link>
      <Link to="/borrow" style={{ marginRight: "10px" }}>Borrow Book</Link>
      <Link to="/return" style={{ marginRight: "10px" }}>Return Book</Link>
    </nav>
  );
}
