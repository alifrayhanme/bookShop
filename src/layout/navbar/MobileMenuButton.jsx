import React from "react";

const MobileMenuButton = () => {
  return (
    <div>
      <button className="flex md:hidden text-green-600 border border-green-600 hover:text-white hover:bg-[#FECD07] rounded-md px-2 py-1 cursor-pointer">
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
};

export default MobileMenuButton;
