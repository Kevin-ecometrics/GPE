import axios from "axios";

const API_URL = "https://gpeconsultores.com.mx";
// const API_URL = "http://localhost:3000";
export const subscribeToNewsletter = (email) => {
  return axios.post(`${API_URL}/newsletter`, { email });
};

export const sendContactEmail = (data) => {
  return axios.post(`${API_URL}/contact`, data);
};
