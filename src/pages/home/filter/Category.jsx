import { useBookContext } from "../../../context/BooksContext";

const Category = () => {
  const { handleBooksCategory, handelBestSeller } = useBookContext();

  const handelCategory = (category) => {
    if (category === "Best Seller") {
      handelBestSeller(category)
      return
    }
    handleBooksCategory(category)
  };

  const categories = ["Best Seller", "Fiction", "Non-fiction", "Children's"];

  return (
    <div className="flex flex-wrap justify-center md:justify-start sm:gap-3 gap-2 text-green-950 font-medium text-sm sm:text-base">
      {categories.map((category) => (
        <span
          key={category}
          onClick={() => handelCategory(category)}
          className="cursor-pointer hover:text-green-600"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default Category;
