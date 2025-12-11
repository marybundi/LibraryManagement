import axios from "axios";

const API_URL = "http://localhost:8080/api/books";

// Get all books
export const getBooks = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Borrow a book
export const borrowBook = async (bookId, memberId) => {
  return axios.post(`${API_URL}/borrow`, { bookId, memberId });
};

// Return data
export const returnBook = async (bookId, memberId) => {
  return axios.post(`${API_URL}/return`, { bookId, memberId });
};
