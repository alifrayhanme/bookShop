import React from "react";
import { Link } from "react-router";
import { useBookContext } from "../context/BooksContext";

const Footer = () => {
  const { resetSearch, handleBooksCategory, handelBestSeller, scrollUp } =
    useBookContext();

  const handelCategory = (category) => {
    scrollUp();
    if (category === "Best Seller") {
      handelBestSeller(category);
      return;
    }
    handleBooksCategory(category);
  };

  return (
    <footer className="bg-green-50 text-green-800 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-green-600 mb-3">StoryNest</h2>
          <p className="text-sm text-green-700">
            Discover a world of books at StoryNest – your cozy online bookstore
            for stories that inspire, inform, and ignite imagination.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                onClick={resetSearch}
                to="/"
                className="hover:text-[#FECD07]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#FECD07]">
                About
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#FECD07]">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/"}
                onClick={() => handelCategory("Best Seller")}
                className="hover:text-[#FECD07]"
              >
                Best Seller
              </Link>
            </li>
            <li>
              <Link to={"/"}
                onClick={() => handelCategory("Fiction")}
                className="hover:text-[#FECD07]"
              >
                Fiction
              </Link>
            </li>
            <li>
              <Link to={"/"}
                onClick={() => handelCategory("Non-fiction")}
                className="hover:text-[#FECD07]"
              >
                Non-fiction
              </Link>
            </li>
            <li>
              <Link to={"/"}
                onClick={() => handelCategory("Children's")}
                className="hover:text-[#FECD07]"
              >
                Children's Books
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm">Email: support@storynest.com</p>
          <p className="text-sm">Phone: +8801230-000000</p>
          <div className="flex space-x-3 mt-3 text-xl text-green-600">
            <a href="#" className="hover:text-[#FECD07]">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#FECD07]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-[#FECD07]">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 bg-green-100 text-sm">
        &copy; {new Date().getFullYear()} <Link className="text-green-600 font-bold" onClick={resetSearch} to={"/"}>StoryNest</Link>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
