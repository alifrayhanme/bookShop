import React from "react";
import { useNavigate } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const BookCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useBookContext();

  return (
    <div
  key={product.id}
  className="w-full bg-white rounded-md overflow-hidden border border-green-600 transition-all duration-300 flex flex-col items-center group"
>
  <div className="relative h-72 w-full">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 w-full bg-white bg-opacity-90 flex flex-col opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full py-2 px-4 text-sm"
      >
        ADD TO CART
      </button>
      <button
        onClick={() => navigate(`/product/${product.id}`, { state: product })}
        className="border border-green-600 text-green-600 bg-green-50 hover:bg-green-100 font-medium py-2 px-4 w-full text-sm"
      >
        VIEW DETAILS
      </button>
    </div>
  </div>

  <div className="text-start space-y-1.5 px-3 py-4 w-full">
    <p className="text-base font-bold text-gray-800 tracking-tight hover:text-green-700 transition-colors duration-200 line-clamp-1">
      {product.title}
    </p>
    <p className="text-sm text-green-800 font-semibold line-clamp-1">
      by {product.author}
    </p>
    <p className="text-sm text-gray-600 italic line-clamp-2 leading-snug">
      {product.description}
    </p>
    <p className="text-base font-bold text-green-900 mt-1">
      ${product.price}
    </p>
  </div>
</div>

  );
};

export default BookCard;
