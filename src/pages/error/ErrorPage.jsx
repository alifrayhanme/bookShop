import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        The page you are looking for doesn’t exist or an error occurred.
      </p>
      <Link
        to="/"
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
