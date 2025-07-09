import React, { useRef, useState } from "react";

import SearchBox from "./SearchBox";
import NavLink from "./NavLink";
import Logo from "./Logo";
import MobileMenuButton from "./MobileMenuButton";
import useOutsideClick from "../../hook/useOutsideClick";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const buttonRef = useRef();
  const desktopInputRef = useRef();
  const mobileInputRef = useRef();
  useOutsideClick([buttonRef, desktopInputRef, mobileInputRef], () =>
    setShowNav(false)
  );

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-between items-center py-2 px-6 bg-green-50 h-20">
        <Logo />

        <div className="hidden md:flex justify-between items-center gap-5">
          <SearchBox ref={desktopInputRef} />
          <NavLink />
        </div>

        <div
          ref={buttonRef}
          onClick={() => setShowNav(!showNav)}
          className="flex md:hidden"
        >
          <MobileMenuButton />
        </div>

        {showNav && (
          <div className="md:hidden flex flex-col justify-start absolute top-[80px] right-0 left-0 px-5 pb-4 z-50 transition duration-500 ease-in-out space-y-4 bg-green-50">
            <NavLink dynamicStyle="flex-col" toCart="cart" />
            <SearchBox ref={mobileInputRef} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
