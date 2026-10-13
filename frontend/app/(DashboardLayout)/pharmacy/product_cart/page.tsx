"use client";

import { MdHistoryToggleOff } from "react-icons/md";
import Link from "next/link";
import { BsCartPlus } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import Modal from "@/components/medinexus/Modal";
import { X } from "lucide-react";
import { Checkbox } from "flowbite-react";
const Cart = () => {
  const data = [
    {
      id: 1,
      Medicine: "Paracetamol 500mg",
      Category: "Pain Relief",
      Manufacturer: "GSK",
      Unit_Price: "5.50",
      Stock: 120,
    },
    {
      id: 2,
      Medicine: "Amoxicillin 500mg",
      Category: "Antibiotic",
      Manufacturer: "Pfizer",
      Unit_Price: "8.75",
      Stock: 85,
    },
    {
      id: 3,
      Medicine: "Ibuprofen 400mg",
      Category: "Pain Relief",
      Manufacturer: "Abbott",
      Unit_Price: "6.25",
      Stock: 64,
    },
  ];

  useEffect(() => {
    data.map((item: any) => {
      console.log("item", item.id);
    });
  }, [data]);
  // const [cartData, setcartData] = useState<[]>(data);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-yellow-200 py-3 px-3 rounded-lg">
        <div className="flex justify-between items-center">
          {/* Total Cart Items */}{" "}
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold"> Total Cart Items: </h1>
            <span className="border border-blue-600 px-3 py-1 rounded bg-green-300 text-blue-700 font-semibold">
              6
            </span>
          </div>
          {/* Filter and Search */}
          <div className="flex justify-between gap-10">
            <select
              name=""
              id=""
              className="w-40 border-2 border-black bg-black h-10 px-3 text-lg text-gray-600 rounded-lg"
            >
              <option value="">All</option>
              <option value="">Pain Killer</option>
              <option value="">Vitamins</option>
            </select>
            <div className="flex">
              <input
                type="text"
                placeholder="Search Suppliers"
                className="border border-gray-800 h-10 rounded-sm p-4 text-sm after:border-gray-800"
              />
              <IoSearch className="h-7 w-7 ml-2 " />
            </div>
          </div>
        </div>
        {/* Select Options */}
        <div className="flex gap-5 mt-6 justify-end mr-10">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" />
            <span className="font-semibold text-gray-600 text-sm">
              Select All
            </span>
          </label>
        </div>
      </div>
      {/* All Products */}
      <div className="mt-6 space-y-4 bg-white p-4 rounded-lg">
        {/* Products 1 */}
        {data?.length > 0 ? (
          data?.map((item: any, index: any) => (
            <div
              key={index}
              className=" flex items-center justify-around gap-50 bg-emerald-500 px-4 border border--200 shadow-sm hover:shadow-md transition-all rounded-lg"
            >
              <input
                type="checkbox"
                className="w-5 h-5 accent-yellow-400 rounded-sm "
              />

              <div className="w-84 my-2 -ml-40 bg-yellow-200 flex justify-center space-x-10 rounded-lg">
                <img src="/hrm_image/doctor.png" alt="" className="w-20 h-20" />
                <div>
                  <p className="text-lg font-semibold text-gray-700">
                    {item.Medicine}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{item.Category}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.Manufacturer}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Stock: {item.Stock}
                  </p>
                </div>
              </div>
              <div className="bg-yellow-200 w-30 h-18 flex flex-col items-center justify-center self-center rounded-lg shadow-sm">
                <span className="text-sm text-gray-500">Price</span>
                <span className="text-gray-800 font-bold">
                  Rs.{item.Unit_Price}
                </span>
              </div>

              {/* Buttons */}
              <div className="bg-yellow-200 w-40 h-18 flex flex-col items-center justify-center rounded-lg ">
                <p className="text-sm text-gray-500 mb-1"> Quantity </p>
                <div className="">
                  <button className="text-lg hover:bg-green-400 bg-green-300 py-1 px-3 rounded-sm">
                    -
                  </button>
                  <input
                    type="text"
                    defaultValue="1"
                    min="1"
                    className="border-2 border-gray-300 rounded-sm w-15 h-6 inline-flex text-center px- mx-1  bg-white p-4 "
                  />
                  <button className="text-lg hover:bg-green-400 bg-green-300 py-1 px-3 rounded-sm">
                    +
                  </button>
                </div>
              </div>
              {/* Total  */}
              <div className="w-25 bg-yellow-200 h-18 w-30 rounded-lg flex flex-col items-center justify-center">
                <p className="text-gray-600"> Subtotal </p>
                <p className="font-semibold"> Rs. 10 </p>
              </div>
            </div>
          ))
        ) : (
          <span className="text-center  col-span-3 py-8 font-semibold text-xl">
            No Data Available
          </span>
        )}
      </div>

      {/* </div> */}

      {/* Selected Products total */}
      <div className="flex justify-end mt-8 mr-10">
        <div className="w-80 p-5 border-gray-200 rounded-xl shadow-sm">
          <div className="flex justify-between text-gray-600">
            <span>Selected Items</span> <span>1</span>
          </div>
          <hr className="p-2 mt-3" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span> <span>Rs. 1,190</span>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-end gap-4 mt-6 mr-10">
        <button className="px-5 py-2 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-500 hover:text-white transition-all">
          Buy Order
        </button>
        <button className=" px-5 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all">
          Delete
        </button>
        <button className="px-5 py-2 border-2 border-gray-400 text-gray-600 rounded-lg hover:bg-gray-200 transition-all">
          Cancel
        </button>
      </div>
    </>
  );
};
export default Cart;
