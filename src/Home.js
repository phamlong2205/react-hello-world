import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <Link
        to="/profile"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go to Profile
      </Link>
    </div>
  );
}

export default Home;
