import axios from "axios";

const API_URL = "http://localhost:3000";

export const subscribeToNewsletter = (email) => {
  return axios.post(`${API_URL}/newsletter`, { email });
};
