import axios from "axios";

const API_URL = "http://localhost:8080/api/books";

// Get all books
export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

// Borrow a book
export const borrowBook = async (bookId, memberId) => {
  try {
    const response = await axios.post(`${API_URL}/borrow`, { bookId, memberId });
    return response.data;
  } catch (error) {
    console.error("Error borrowing book:", error);
    throw error;
  }
};

// Return a book
export const returnBook = async (bookId, memberId) => {
  try {
    const response = await axios.post(`${API_URL}/return`, { bookId, memberId });
    return response.data;
  } catch (error) {
    console.error("Error returning book:", error);
    throw error;
  }
};
