import { useNavigate } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const SearchBox = ({ inputRef }) => {
  const { searchValue, setSearchValue, handleSearch } = useBookContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    navigate("/");
  };

  return (
    <div className="flex justify-center mb-4 md:mb-0">
      <div className="flex items-center border rounded-lg overflow-hidden w-full">
        <form onSubmit={handleSubmit} className="flex w-full">
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search books..."
            className="px-2 py-1 w-full outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-yellow-500 text-white px-2 py-1"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;

// import { useNavigate } from "react-router";
// import { useBookContext } from "../../context/BooksContext";

// const SearchBox = ({ ref }) => {
//   const { searchValue, setSearchValue, handleSearch } = useBookContext();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSearch();
//     navigate("/");
//   };

//   return (
//     <div className="flex justify-center mb-4 md:mb-0">
//       <div className="flex items-center border rounded-lg overflow-hidden w-full ">
//         <form onSubmit={handleSubmit} className="flex w-full">
//           <input
//             ref={ref}
//             type="text"
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             placeholder="Search books..."
//             className="px-2 py-1 w-full outline-none"
//           />
//           <button
//             type="submit"
//             className="bg-green-600 hover:bg-yellow-500 text-white px-2 py-1"
//           >
//             <i className="fa-solid fa-magnifying-glass"></i>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;
