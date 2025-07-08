import BookCard from "./BookCart";
import { useBookContext } from "../../context/BooksContext";
import Filter from "./filter/Filter";

const Home = () => {
  const { searchResults } = useBookContext();
  
  return (
    <>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 justify-items-center">
        {searchResults.map((book) => (
          <BookCard key={book.id} product={book} />
        ))}
      </div>
    </>
  );
};

export default Home;
