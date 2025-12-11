import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Members from "./pages/Members";
import BorrowBook from "./pages/BorrowBook";
import ReturnBook from "./pages/ReturnBook";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/members" element={<Members />} />
          <Route path="/borrow" element={<BorrowBook />} />
          <Route path="/return" element={<ReturnBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
