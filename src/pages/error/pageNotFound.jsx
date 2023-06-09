import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    let navigate = useNavigate();
  return (
    <div className="bg-[#222] flex-col min-h-screen text-white">
      <div>
        <Navbar />
      </div>

      <h1 className="text-center pt-40 capitalize  text-5xl font-bold">
        <span className="text-primary"> Opps! </span> page not found
      </h1>
      <h2 className="text-center pt-4 text-xl capitalize">abeg go home</h2>
      <div className="flex justify-center items-center mt-3">
        <button onClick={() => navigate("/")} className="bg-primary w-[12rem] h-[4rem] flex justify-center text-2xl items-center  rounded-[10px]">
          Home
        </button>
      </div>
    </div>
  );
}
