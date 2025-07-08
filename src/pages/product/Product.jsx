import React from "react";
import { Link, useLocation } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const Product = () => {
  const { addToCart, scrollUp } = useBookContext();
  const location = useLocation();
  const product = location.state;
  
  scrollUp();

  if (!product) {
    return (
      <div className="mt-40 text-center text-red-500">
        No product data available.
      </div>
    );
  }

  const {
    title,
    author,
    description,
    price,
    category,
    type,
    forChildren,
    publisher,
    language,
    pages,
    image,
    rating,
    stock,
    sold,
  } = product;

  return (
    <>
      <div className="my-40 max-w-5xl mx-auto p-6 rounded-lg flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={title}
            className="object-cover w-80 h-[400px] rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-green-700 font-medium text-lg">by {author}</p>
          <p className="text-sm text-gray-600 italic">
            {type} | {category}
          </p>
          <p className="text-gray-800">{description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 pt-2">
            <p>
              <strong>Publisher:</strong> {publisher}
            </p>
            <p>
              <strong>Language:</strong> {language}
            </p>
            <p>
              <strong>Pages:</strong> {pages}
            </p>
            <p>
              <strong>For Children:</strong> {forChildren ? "Yes" : "No"}
            </p>
            <p>
              <strong>Rating:</strong> {rating} ⭐
            </p>
            <p>
              <strong>Sold:</strong> {sold.toLocaleString()} copies
            </p>
            <p>
              <strong>Stock:</strong> {stock} left
            </p>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-green-700">$ {price}</span>
            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link
          className="text-green-600 border border-green-600 px-2.5 py-2 rounded-sm hover:bg-green-600 hover:text-white "
          to={"/"}
        >
          back to home
        </Link>
      </div>
    </>
  );
};

export default Product;
