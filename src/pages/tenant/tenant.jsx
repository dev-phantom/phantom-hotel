import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProperty = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState(0);
  const [roomType, setRoomType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-full  bg-[#222] px-4 overflow-x-hidden lg:px-40 lg:px-40 py-[5rem]">
      <div className="w-full pb-10 shadow-[0_4px_63px_rgba(0,0,0,0.15)] rounded-[10px]">
        <div>
          <h3 className="font-popins font-bold py-10 text-white text-center text-[28px]">
            Schedule a meeting
          </h3>
        </div>
        <form action="">
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 pt-3 px-10 gap-8">
            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  Name <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  Address <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <input
                  type="text"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  Phone Number <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <input
                  type="number"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                  placeholder="Enter Phone No"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  Room Type <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <select
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                  value={roomType}
                  onChange={handleRoomTypeChange}
                >
                  <option value="">Select Room Type</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>

            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  budget <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <input
                  type="number"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="py-2">
                <label
                  htmlFor=""
                  className="text-white font-semibold font-popins text-[17px] capitalize"
                >
                  Available Date <span className="text-primary">*</span>
                </label>
              </div>
              <div>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="yyyy/MM/dd"
                  className="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-800 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-10">
            <div className="py-2">
              <label
                htmlFor=""
                className="text-white font-semibold font-popins text-[17px] capitalize"
              >
                Notes <span className="text-primary">*</span>
              </label>
            </div>
            <textarea
              placeholder="Enter Notes"
              className="w-full h-[151px] bg-[#F9F9F9] rounded border-2 p-4 border-[#E6E6E6]"
            ></textarea>
          </div>
          
          <div className="flex justify-center items-center my-10">
            <button className="bg-primary w-[250px] h-[58px] lg:w-[513px] lg:h-[69.01px] xl:w-[513px] xl:h-[69.01px] flex justify-center items-center text-lg lg:text-xl text-white rounded-[10px]">
              Add New Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
