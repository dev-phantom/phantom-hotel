import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const handleRoute = (path) => {
    navigate(path); // Use the navigate function to navigate to the specified path
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    // Check if user is signed in
    const isUserSignedIn = true; // Replace with your logic to check if user is signed in
    if (isUserSignedIn) {
      // User is signed in, proceed to checkout
      setShowModal(true);
    } else {
      // User is not signed in, show the sign-in modal
      setShowModal(true);
    }
  };

  // Filter unique items by ID
  const uniqueItems = cartItems.reduce((unique, item) => {
    return unique.find((i) => i.id === item.id) ? unique : [...unique, item];
  }, []);

  // Calculate total price
  const totalPrice = uniqueItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // Calculate VAT
  const vatPercentage = 0.2; // 20%
  const vat = totalPrice * vatPercentage;

  // Calculate total price including VAT
  const totalPriceWithVat = totalPrice + vat;

  return (
    <div className="flex bg-[#222] flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex-grow overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-semibold text-white mb-4">Cart</h1>
          {uniqueItems.length > 0 ? (
            uniqueItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleRoute(`/property/${item.id}`)}
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-lg p-4 mb-4"
              >
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <img src={item.propertyImg} alt="" className="w-[4.5rem]" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-800">
                      {item.address}
                    </p>
                    <p className="text-lg text-gray-600">${item.price}/month</p>
                  </div>
                  <div className="flex flex-row justify-center items-center gap-4">
                    <div>{item.price}</div>
                    <div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-white bg-red-500 px-4 py-2 rounded-lg"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-white text-xl">No items</h2>
          )}
          <div className="py-2 text-white text-right">
            Subtotal: ${totalPrice}
          </div>
          <div className="py-2 text-white text-right">
            VAT ({(vatPercentage * 100).toFixed(0)}%): ${vat}
          </div>
          <div className="py-2 text-white font-bold text-3xl text-right">
            Total (incl. VAT): ${totalPriceWithVat}
          </div>

          {/* Checkout button */}
          <button
            onClick={handleCheckout}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg mt-4"
          >
            Checkout
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">
                  Sign in to proceed
                </h2>
                <p>Please sign in to continue with the checkout process.</p>
                <div className="flex gap-2 justify-end mt-4">
                  <button
                    onClick={() => navigate("/tenants")}
                    className="text-white bg-gray-500 px-4 py-2 rounded-lg"
                  >
                    sign in
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-white bg-gray-500 px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
