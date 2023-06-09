import React from "react";
import AddProperty from "../../components/AddProperty";
import Navbar from "../../common/Navbar";

export default function Landlord() {
  return (
    <>
      <div className="bg-[#222]">
        <Navbar />
      </div>
      <AddProperty />
    </>
  );
}
