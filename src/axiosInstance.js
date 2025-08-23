import axios from "axios";

// Function to generate a unique request ID
const generateRequestId = () => Math.random().toString(36).substring(2, 15);

const axiosInstance = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  timeout: 5000, // 5 seconds timeout
  headers: {
    Accept: "*/*",
    "X-Request-ID": generateRequestId(),
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
