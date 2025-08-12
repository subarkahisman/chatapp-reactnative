import axios from "axios";

const baseURL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

const customFetch = axios.create({
  baseURL: baseURL + "/api",
});

export default customFetch;
