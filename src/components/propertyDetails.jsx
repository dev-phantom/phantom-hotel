import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import data from "../data/data.json";
import Navbar from "./Navbar";

const PropertyDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  // Find the property with the matching ID
  const property = data.properties.find(
    (property) => property.id === parseInt(id)
  );

  // If the property is not found, display a message or handle the error
  if (!property) {
    return <div>Property not found</div>;
  }

  const handleAddToCart = () => {
    setIsLoading(true);
    dispatch({ type: "ADD", payload: property });
    localStorage.setItem("cart", JSON.stringify(state));
        setIsLoading(false);

  };

  return (
    <div className="bg-[#222]">
      <div>
        <Navbar />
      </div>

      <div className="w-full flex justify-center items-center mt-8">
        <img src={property.propertyImg} alt="" className="w-[80%] h-[60vh]" />
      </div>

      <div className="mt-10 px-10 lg:px-40 capitalize text-white ">
        <div className="text-[2.5rem] font-medium text-white">
          About the house
        </div>

        <p className="font-normal text-gray-200">Address: {property.address}</p>
        <div className="font-normal pt-2 capitalize font-dmsan text-[18px] text-[#818181]">
          {property.room}
        </div>
        <p className="w-[80%] lg:w-[60%] py-4 text-xl text-orange-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus,
          non dolore incidunt ipsum laboriosam quibusdam a, officia facere
          accusamus, nobis iure tempora debitis nostrum rem. Architecto quia
          quae quas impedit, nobis vel cum eveniet debitis necessitatibus ad
          quibusdam a qui, totam consectetur?
        </p>
        <p className="font-bold pt-2 capitalize font-dmsan text-[22px]">
          Price: <span className="text-[#F4511E]">${property.price}/month</span>
        </p>
        <button
          onClick={handleAddToCart}
          className="my-3 font-dmsan text-[18px] rounded-lg w-[10rem] py-3 bg-[#F4511E]"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PropertyDetails;
