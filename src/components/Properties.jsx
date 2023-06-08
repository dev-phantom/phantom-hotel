import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

const Properties = () => {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleRoute = (path) => {
    navigate(path); // Use the navigate function to navigate to the specified path
  };

  const addToCart = (property) => {
    dispatch({ type: "ADD", payload: property });
    localStorage.setItem("cart", JSON.stringify([...state, property]));
    alert("added successfully")
  };

  return (
    <>
      <div className="w-full flex justify-center items-center px-5">
        <div className="lg:grid lg:grid-cols-3 xl:grid-cols-3 md:grid md:grid-cols-2 flex flex-row px-0 overflow-x-auto pt-8 gap-8 justify-items-center lg:gap-20 xl:gap-5">
          {data.properties.map((property) => {
            return (
              <div
                key={property.id}
                className="flex cursor-pointer flex-col justify-start border-2 border-[#979797] mb-8 shadow-[0_34.0693px_36.1986px_rgba(0,0,0,0.133714)] rounded-[26.6166px]"
                data-aos="flip-left"
                data-aos-duration="2000"
              >
                <div
                  onClick={() => handleRoute(`/property/${property.id}`)}
                  rel="noopener noreferrer"
                >
                  <div>
                    <img
                      src={property.propertyImg}
                      alt={property.propertyImg}
                      className="w-full"
                    />
                  </div>
                  <div className="px-[8rem] flex lg:hidden lg:px-0 md:px-0 xl:px-0"></div>
                  <div className="px-4 pt-2 pb-5">
                    <div className="pt-2 font-dmsan text-black font-bold capitalize text-[18px]">
                      {property.address}
                    </div>
                    <div className="font-normal pt-2 capitalize font-dmsan text-[18px] text-[#818181]">
                      {property.room}
                    </div>
                    <div className="font-bold pt-2 capitalize font-dmsan text-[22px] text-[#F4511E]">
                       ${property.price}/month
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-full items-center">
                  <button
                    className="bg-[#F4511E] w-[90%] py-3 rounded-lg z-[999] my-2"
                    onClick={() => addToCart(property)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Properties;
