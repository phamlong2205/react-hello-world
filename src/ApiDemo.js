import React, { useState } from "react";
import axiosInstance from "./axiosInstance";

function ApiDemo() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const makeApiCall = async () => {
    const controller = new AbortController(); // For cancellation
    const timeout = setTimeout(() => controller.abort(), 5000); // Timeout safety

    try {
      const res = await axiosInstance.post(
        "/test-endpoint",
        { param1: "value1", param2: "value2" },
        { signal: controller.signal }
      );
      setResponse(res.data);
      console.log("API response:", res.data);
      // Example redirect
      // if (res.data.redirectUrl) window.location.href = res.data.redirectUrl;
    } catch (err) {
      if (axiosInstance.isCancel(err)) {
        console.log("Request cancelled:", err.message);
      } else {
        setError(err.message);
        console.error("API error:", err);
      }
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <div className="text-center mt-10 p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Axios API Demo</h1>
      <button
        onClick={makeApiCall}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 transition"
      >
        Make API Call
      </button>
      {response && <pre className="mt-4 text-left">{JSON.stringify(response, null, 2)}</pre>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}

export default ApiDemo;
