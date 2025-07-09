import { useState } from "react";
import Books from "../data/Data";

const useBookFilter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(Books);

  const handleSearch = () => {
    const filtered = Books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        book.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filtered);
    setSearchValue("");
    scrollUp();
  };

  const handelBestSeller = () => {
    const filtered = Books.filter((book) => book.sold >= 100000000);
    setSearchResults(filtered);
  };

  const handleBooksCategory = (value) => {
    if (value === "Non-fiction") {
      const filtered = Books.filter((book) =>
        book.type.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
      return;
    }
    const filtered = Books.filter((book) => book.type.includes(value));
    setSearchResults(filtered);
  };


  const sortByPrice = (order) => {
    const sorted = [...searchResults].sort((a, b) => {
      if (order === "default") return a.id - b.id;
      if (order === "low-to-high") return a.price - b.price;
      if (order === "high-to-low") return b.price - a.price;
      return 0;
    });
    setSearchResults(sorted);
  };

  
  const resetSearch = () => {
    setSearchResults(Books);
    setSearchValue("");
    scrollUp();
  };

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return {
    searchValue,
    setSearchValue,
    searchResults,
    handleSearch,
    resetSearch,
    sortByPrice,
    handelBestSeller,
    handleBooksCategory,
    scrollUp,
  };
};

export default useBookFilter;
