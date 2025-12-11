import axios from "axios";

const API_URL = "http://localhost:8080/api/borrowings";

// Get all borrowings
export const getBorrowings = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get borrowings by member
export const getBorrowingsByMember = async (memberId) => {
  const response = await axios.get(`${API_URL}/member/${memberId}`);
  return response.data;
};
