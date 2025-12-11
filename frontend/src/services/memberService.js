import axios from "axios";

const API_URL = "http://localhost:8080/api/members";

// Get all members
export const getMembers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a member by ID
export const getMemberById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
