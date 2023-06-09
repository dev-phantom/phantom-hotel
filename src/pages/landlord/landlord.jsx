import React from 'react'
import AddProperty from '../../components/AddProperty';
import Navbar from "../../components/Navbar";

export default function Landlord() {
  return (
    <>
      <div className='bg-[#222]'>
        <Navbar />
      </div>
      <AddProperty />
    </>
  );
}
