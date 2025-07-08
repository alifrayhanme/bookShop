import { RouterProvider } from "react-router";
import Router from "./router/Router";
import { BooksContextProvider } from "./context/BooksContext";

const App = () => {
  return (
    <>
      <BooksContextProvider>
        <RouterProvider router={Router} />
      </BooksContextProvider>
    </>
  );
};

export default App;
