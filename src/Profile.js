import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <Link
        to="/"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Profile;
