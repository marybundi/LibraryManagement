import axios from "axios";

const API_URL = "http://localhost:8080/api/members";

// Get all members
export const getMembers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

// Get a member by ID
export const getMemberById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching member with id ${id}:`, error);
    return null;
  }
};
