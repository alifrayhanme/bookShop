import { useEffect } from "react";

const useOutsideClick = (refs = [], onOutsideClick) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target)
      );

      if (clickedOutside) {
        onOutsideClick();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refs, onOutsideClick]);
};

export default useOutsideClick;

