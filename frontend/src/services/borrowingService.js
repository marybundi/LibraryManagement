import axios from "axios";

const API_URL = "http://localhost:8080/api/borrowings";

// Get all borrowings
export const getBorrowings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching borrowings:", error);
    return [];
  }
};

// Get borrowings by member
export const getBorrowingsByMember = async (memberId) => {
  try {
    const response = await axios.get(`${API_URL}/member/${memberId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching borrowings for member ${memberId}:`, error);
    return [];
  }
};
