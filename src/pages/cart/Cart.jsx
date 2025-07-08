import { Link } from "react-router";
import { useBookContext } from "../../context/BooksContext";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalAmount,
    clearCart,
    scrollUp,
    resetSearch,
  } = useBookContext();

  scrollUp();

  return (
    <div className="max-w-4xl mx-auto my-24 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <>
          <div className="bg-yellow-100 p-6 rounded text-center text-gray-700 font-medium shadow my-52">
            Your cart is empty. Start adding some books!
          </div>
          <div className="flex justify-center items-center">
            <Link
              onClick={resetSearch}
              to={"/"}
              className="bg-green-600 py-2 px-5 rounded-sm text-white border-2 border-green-600 hover:text-green-600 hover:bg-white"
            >
              Start Shoping
            </Link>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-4 md:gap-6 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-40 object-cover rounded shadow"
              />

              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500">{item.author}</p>
                    <p className="text-green-700 font-medium mt-1">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="w-8 h-8 border rounded text-lg font-semibold hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 border rounded">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="w-8 h-8 border rounded text-lg font-semibold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-800">Total:</h3>
            <p className="text-xl font-bold text-green-700">
              ${totalAmount.toFixed(2)}
            </p>
          </div>

          <div className="flex justify-end mt-4">
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
