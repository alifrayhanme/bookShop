import React from "react";
import { Link } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const Logo = () => {
  const { resetSearch } = useBookContext();

  return (
    <div>
      <Link
        onClick={resetSearch}
        to="/"
        className="text-2xl font-bold text-green-600"
      >
        <img className="w-40" src="StoryNest.png" alt="StoryNest" />
      </Link>
    </div>
  );
};

export default Logo;
