import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://next-ecommerce-server-eta.vercel.app",
  withCredentials: false,
});

export default api;
