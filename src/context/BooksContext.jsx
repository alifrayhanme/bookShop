import React, { createContext, useContext } from "react";
import useBookFilter from "../hook/useBookFilter";
import useCartHandler from "../hook/useCartHandler";

const BooksContext = createContext(null);

export const BooksContextProvider = ({ children }) => {
  const filterBooks = useBookFilter();
  const cartHandler = useCartHandler();
  console.log(cartHandler);
  
  const contextValue = {
    ...filterBooks,
    ...cartHandler,
  };

  return (
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error(
      "useBookContext must be used within a BooksContextProvider"
    );
  }
  return context;
};



























// import React, { createContext, useContext } from "react";
// import useBookFilter from "../hook/useBookFilter";

// const BooksContext = createContext(null);

// export const BooksContextProvider = ({ children }) => {
//   const filterBooks = useBookFilter()

//   console.log(filterBooks);
//   return (
//     <BooksContext.Provider value={filterBooks}>{children}</BooksContext.Provider>
//   );
// };

// export const useBookContext = () => {
//   const context = useContext(BooksContext);
//   if (!context) {
//     throw new Error(
//       "useBookContext must be used within a BooksContextProvider"
//     );
//   }
//   return context;
// };
