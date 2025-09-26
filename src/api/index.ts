import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "api-key": import.meta.env.VITE_API_KEY,
  },
});
