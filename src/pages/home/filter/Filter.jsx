import React from "react";
import SortByPrice from "./SortByPrice";
import Category from "./Category";

const Filter = () => {
  return (
    <>
      <div className="mt-[80px] flex flex-wrap justify-between items-center px-6 py-2 bg-green-100 border-t border-b border-green-300 space-y-2 md:space-y-0">
        <Category />
        <SortByPrice />
      </div>
    </>
  );
};

export default Filter;