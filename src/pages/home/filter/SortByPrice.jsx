import React from "react";
import { useBookContext } from "../../../context/BooksContext";


const SortByPrice = () => {
  const { sortByPrice } = useBookContext();

  const handleSortChange = (e) => {
    const value = e.target.value;
    sortByPrice(value);
  };

  return (
    <div className="flex justify-center md:justify-end items-center gap-2 text-green-950">
      <label htmlFor="sort" className="font-medium whitespace-nowrap">
        Sort by:
      </label>
      <select
        id="sort"
        onChange={handleSortChange}
        className="border border-green-300 rounded-md px-2 py-1 text-sm w-full focus:outline-none"
      >
        <option value="default">Default</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
