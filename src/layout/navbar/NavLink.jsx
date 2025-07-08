import React from "react";
import { Link } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const NavLink = ({ dynamicStyle = "", toCart = "" }) => {
  const { resetSearch, totalQuantity } = useBookContext();


  return (
    <ul
      className={`flex gap-4 text-lg font-medium text-green-600 ${dynamicStyle}`}
    >
      <li>
        <Link onClick={resetSearch} to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li className="relative">
        <Link to="/cart" className="flex items-center space-x-1">
          <div className="relative">
            <i className="fa-solid fa-basket-shopping text-lg"></i>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-md">
                {totalQuantity}
              </span>
            )}
          </div>
          <span className="text-sm font-medium">{toCart}</span>
        </Link>
      </li>
    </ul>
  );
};
export default NavLink;
