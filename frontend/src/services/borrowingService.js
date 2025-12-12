import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getActiveBorrowings = async () => {
  try {
    const response = await axios.get(`${API_URL}/borrowings`);
    return response.data;
  } catch (err) {
    console.error("Error fetching active borrowings:", err);
    return [];
  }
};

export const returnBook = async (bookId, memberId) => {
  try {
    const response = await axios.post(`${API_URL}/books/return`, { bookId, memberId });
    return response.data;
  } catch (err) {
    console.error("Error returning book:", err);
    throw err;
  }
};
