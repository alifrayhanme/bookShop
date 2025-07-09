import React, { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const SearchBox = forwardRef((props, ref) => {
  const { searchValue, setSearchValue, handleSearch } = useBookContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    navigate("/");
  };

  return (
    <div className="w-full flex">
      <input
        ref={ref}
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search books..."
        className="px-2 py-1 w-full outline-none bg-white"
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="bg-green-600 hover:bg-yellow-500 text-white px-2 py-1"
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
});

export default SearchBox;
