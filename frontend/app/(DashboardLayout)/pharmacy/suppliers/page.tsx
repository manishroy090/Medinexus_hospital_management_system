"use client";
import { MdHistoryToggleOff } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BiSolidPurchaseTag } from "react-icons/bi";
import Link from "next/link";
import { PiWarehouseFill } from "react-icons/pi";

import { FaCartPlus } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import { CgPhone } from "react-icons/cg";
import { CgMail } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import Modal from "@/components/medinexus/Modal";
import { X } from "lucide-react";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import { CiDeliveryTruck } from "react-icons/ci";

import { supplierlist } from "@data/pharmacy/suppliers/supplierlist";

const Supplier = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRecent, setRecentModal] = useState(false);
  const [showItems, setItemsModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showAddSupplier, setShowAddSupplier] = useState(false);
  const [suppliers, setSuppliers] = useState<any>(supplierlist);

  //toggel modal code
  function openViewModal() {
    setShowModal(true);
  }

  //toggel modal code
  function openRecentModal() {
    setRecentModal(true);
  }

  //toggel modal code
  function openItemsModal() {
    setItemsModal(true);
  }

  //toggel modal code
  function openAddSupplierModal() {
    setShowAddSupplier(true);
  }

  // useEffect (()=>{
  //   setSuppliers(supplierlist)
  // },[supplierlist])

  useEffect(() => {
    suppliers.map((item: any) => {
      console.log("item", item.id);
    });
  }, [suppliers]);

  return (
    <>
      <div className="flex  justify-around bg-amber-200 p-2 ">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold"> Total Suppliers: </h1>
          <span className="border border-blue-600 px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold">
            6
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="mt-1 mr-8 ml-5 bg-gray-200 cursor-pointer px-2 hover:scale-135 transition-all bg-amber-200 p-2">
            <Link
              href={"/pharmacy/product_cart"}
              className="mt-1 cursor-pointer"
            >
              <FaCartPlus className="h-7 w-7 text-gray-600" />
            </Link>
          </div>
          <a href={"#"}>
            <button
              className="mt-1 mr-8 ml-5 bg-gray-200 cursor-pointer px-2 hover:scale-135 transition-all bg-amber-200 p-2"
              onClick={openAddSupplierModal}
            >
              <PiWarehouseFill className="h-7 w-7 text-gray-600"></PiWarehouseFill>
            </button>
          </a>
        </div>
      </div>

      <div className="bg-white p-2 shadow">
        <div className="flex justify-between gap-33 m-5 ">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search Suppliers"
              className="border border-gray-300 h-10 rounded-sm p-4 text-sm"
            />
            <div className="bg-[#14967f] flex items-center justify-center p-1 rounded">
              <IoSearch className="h-7 w-7 ml-2 text-white text-xs" />
            </div>
          </div>
          <div>
            <select className="p-2 border border-gray-300 rounded-lg w-25 font-semibold text-sm">
              <option className="border border-gray-200">All Status</option>
              <option className="border border-gray-200">Merchant</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-[90%]  relative left-20 ">
          {/* First Box */}

          {suppliers?.length > 0 ? (
            suppliers?.map((item: any, index: any) => (
              <div
                key={index}
                className="border-2 border-[#14967f] bg-white rounded-sm w-105 h-fit "
              >
                <div className="flex justify-between space-x-4 py-1  bg-[#14967f] rounded">
                  <div className="flex  bg-amber-200   space-x-24 items-center px-4">
                    <div>
                      <img
                        src="/hrm_image/doctor.png"
                        alt="icon"
                        className=" flex  h-13"
                      />
                    </div>

                    <div className="-ml-18  break-all w-52">
                      <p className="font-bold   ">{item.company_name}</p>
                      <p className="text-gray-500">{item.distributor_name}</p>
                    </div>

                    {item.active == 1 ? (
                      <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                    ) : (
                      <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                    )}
                  </div>
                </div>
                <div className="px-4 py-3 text-gray-500  pb-3 flex flex-col space-y-3">
                  <section className="flex space-x-2">
                    <CgPhone className="inline w-auto h-5 text-green-500" />

                    <span>{item.contact_no}</span>
                  </section>

                  <section className="flex space-x-2">
                    <CgMail className="inline w-auto h-6 text-yellow-500 font-semibold" />
                    <span>{item.email}</span>
                  </section>

                  <section className="flex space-x-2">
                    <IoLocation className="inline w-auto h-5 text-red-600" />
                    <span> {item.location}</span>
                  </section>
                </div>

                {/* Card Label Buttons */}
                <div className="text-gray-400 border-t-[2] border-[#14967f] px-4 flex justify-around">
                  <div
                    className="text-sm cursor-pointer hover:text-black mt-3"
                    onClick={openItemsModal}
                  >
                    <BiSolidPurchaseTag className="h-7 w-7 text-yellow-500 " />
                  </div>
                  <button
                    className="text-sm cursor-pointer hover:text-yellow-600 text-green-600 mt-2"
                    onClick={openRecentModal}
                  >
                    <MdHistoryToggleOff className="h-7 w-7" />
                  </button>
                  <div className=" text-sm ">
                    <button
                      className="font-semibold  hover:text-black px-3 mt-3 "
                      onClick={openViewModal}
                    >
                      <AiFillEye className="w-7 h-7 " />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span className="text-center  col-span-3 py-8 font-semibold text-xl">
              No Data Available
            </span>
          )}
        </div>
      </div>

      {/* modal code for view button Starts from here */}
      <Modal
        showModal={showModal}
        className="w-[50rem] h-auto rounded-2xl overflow-hidden shadow-2xl mt-8 px-5 !bg-white"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex w-200 relative right-5 justify-around gap-130">
          <div>
            <p className="text-white/80 font-bold text-lg">
              Suppler Information
            </p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>

        {/* Supplier Information */}
        <div className="flex block m-10  ">
          <div className=" w-18 h-18 self-center justify-center flex">
            <img
              src="/hrm_image/doctor.png"
              alt="icon"
              className="overflow-hidden rounded-lg flex relative h-18 w-18 "
            />
          </div>
          <div className="ml-10 relative top-2">
            <p className="font-bold text-xl text-gray-700">MedSupply Co.</p>
            <p className="text-gray-500 text-lg">Pharmaceutical Distributer</p>
          </div>

          <div className="ml-5">
            <p className="border-2 rounded-full bg-green-100 border-green-300 relative top-3 py-0 px-3 text-green-500 w-25 flex text-lg">
              <span className="w-3 h-3 bg-green-500 rounded-full felx self-center mr-2"></span>
              Active
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="font-bold text-xl bg-gray-100 px-10 py-3 text-gray-600 w-350 relative right-5">
          Contact Information
        </div>

        <div className="text-lg font-semibold p-4 pb-9 w-200 flex relative left-3">
          <div className="border-r-2 p-3 rounded-lg w-55 hover:shadow-lg transition-all relative left-[1] flex gap-2 ">
            <span>
              <FaPhoneAlt />
            </span>
            <span className="relative -top-1 font-normal">
              {" "}
              +977 9701211111{" "}
            </span>
          </div>
          <div className="border-l-2 p-3 rounded-lg w-70 border-r-2 hover:shadow-lg transition-all flex gap-2">
            <span>
              <MdOutlineMailOutline />
            </span>
            <span className="font-normal relative -top-1">
              {" "}
              contact@medsupply.com{" "}
            </span>
          </div>
          <div className="border-l-2 p-3 rounded-lg w-55 hover:shadow-lg transition-all relative right-[1] flex gap-2">
            <span>
              <ImLocation />
            </span>
            <span className="font-normal relative -top-1">
              {" "}
              Satdobato, Lalitpur{" "}
            </span>
          </div>
        </div>

        {/* card */}
        <div className="bg-white flex gap-5 px-4 py-3 justify-center">
          <div className="p-4 border border-gray-200 rounded-xl w-80 bg-white flex justify-between hover:shadow-lg transition-all">
            <div>
              <p className="font-semibold text-lg text-gray-500">
                Selling Rating
              </p>

              <p className="text-2xl text-gray-700 mt-1">77%</p>

              <div className="w-48 h-2 bg-gray-100 rounded-full mt-3">
                <div className="h-full w-[77%] bg-yellow-500 rounded-full"></div>
              </div>

              <p className="text-gray-600 text-sm mt-2">Positive Seller</p>
            </div>

            <div className="text-yellow-600 border border-yellow-300 bg-yellow-50 h-fit px-3 py-1 text-sm rounded-full">
              Medium
            </div>
          </div>

          {/* Shipping Rating */}
          <div className="p-4 border border-gray-200 rounded-xl w-80 bg-white flex justify-between hover:shadow-lg transition-all ">
            <div>
              <p className="font-semibold text-lg text-gray-500">
                Shipping Rating
              </p>

              <p className="text-2xl text-gray-700 mt-1">100%</p>

              <div className="w-48 h-2 bg-gray-100 rounded-full mt-3">
                <div className="h-full w-full bg-green-500 rounded-full"></div>
              </div>

              <p className="text-gray-600 text-sm mt-2">Ships on Time</p>
            </div>

            <div className="text-green-600 border border-green-300 bg-green-50 h-fit px-3 py-1 text-sm rounded-full">
              Excellent
            </div>
          </div>
        </div>

        <div className="text-lg p-3 w-166 flex border-2 border-gray-200 bg-white hover:shadow-lg hover:scale-100 transition-all rounded-lg relative left-12 ">
          I am a trusted medicine seller providing genuine medicines and
          healthcare products to customers at reasonable prices. I focus on
          quality, customer satisfaction, and reliable service while helping
          people find the medicines they need.
        </div>

        <div className="flex justify-end gap-5 mb-0 bg-white px-10 py-4 -mx-5">
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-200  text-gray-600 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* modal code for Recent button Starts from here */}
      <Modal
        showModal={showRecent}
        className="w-[50rem] h-auto rounded-2xl overflow-hidden shadow-2xl mt-8 px-5 !bg-white"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex w-200 relative right-5 justify-around gap-130">
          <div>
            <p className="text-white/80 font-bold text-lg">Recent Purchased</p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setRecentModal(false)}
            />
          </div>
        </div>

        {/* Supplier Information */}
        <div className="flex block m-10">
          <div className=" w-18 h-18 self-center justify-center flex">
            <img
              src="/hrm_image/doctor.png"
              alt="icon"
              className="overflow-hidden rounded-lg flex relative h-18 w-18 "
            />
          </div>
          <div className="ml-10 relative top-2">
            <p className="font-bold text-xl text-gray-700">MedSupply Co.</p>
            <p className="text-gray-500 text-lg">Pharmaceutical Distributer</p>
          </div>

          <div className="ml-5">
            <p className="border-2 rounded-full bg-green-100 border-green-300 relative top-3 py-0 px-3 text-green-500 w-25 flex text-lg">
              <span className="w-3 h-3 bg-green-500 rounded-full felx self-center mr-2"></span>
              Active
            </p>
          </div>
        </div>

        <div className="font-bold text-xl bg-gray-100 px-8 py-3 flex justify-around gap-100 text-gray-600 relative right-5 w-220">
          <p>Recent Purchase Order</p>
          <p className="font-normal text-lg text-gray-500 mr-14">4 orders</p>
        </div>

        {/* Orders */}
        <div className="grid grid-cols-2 my-3 gap-3">
          <div className="p-4 border-2 rounded-xl border border-gray-200 bg-white flex justify-between items-start hover:shadow-lg hover:border-green-300 transition-all">
            <div>
              <p className="font-bold text-lg text-gray-700">#PO-3402</p>

              <p className="text-sm text-gray-400 font-normal mt-1">
                27 May 2025
              </p>

              <p className="text-greem-600 border-2 border-emerald-300 bg-green-100 w-20 px-2 text-sm m-2 rounded-2xl">
                Delivered
              </p>
            </div>

            <p className="font-bold text-gray-700 text-lg">Rs. 1,240</p>
          </div>

          <div className="p-4 border-2 rounded-xl border border-gray-200 bg-white flex justify-between items-start hover:shadow-lg hover:border-yellow-300 transition-all">
            <div>
              <p className="font-bold text-lg text-gray-700">#PO-3402</p>

              <p className="text-sm text-gray-400 font-normal mt-1">
                27 May 2025
              </p>

              <p className="text-Yellow-600 border-2 border-yellow-300 bg-yellow-100 w-20 px-2 text-sm m-2 rounded-2xl">
                Pending
              </p>
            </div>

            <p className="font-bold text-gray-700 text-lg">Rs. 1,240</p>
          </div>

          <div className="p-4 border-2 rounded-xl bg-white flex justify-between items-start gap-30 hover:shadow-lg hover:border-red-300 transition-all">
            <div>
              <p className="font-bold text-lg text-gray-600">
                #PO-3401
                <span className="text-sm text-gray-400 font-normal mt-1">
                  27 May 2025{" "}
                </span>
              </p>
              <p className="text-red-600 border-2 border-red-500 bg-red-100 w-20 px-2 text-sm m-2 rounded-2xl">
                Cancelled
              </p>
            </div>
            <div className="font-bold text-gray-700 text-lg">Rs. 1,240</div>
          </div>

          <div className="p-4 border-2 rounded-xl border border-gray-200 bg-white flex justify-between items-start hover:shadow-lg hover:border-green-300 transition-all">
            <div>
              <p className="font-bold text-lg text-gray-700">#PO-3402</p>

              <p className="text-sm text-gray-400 font-normal mt-1">
                27 May 2025
              </p>

              <p className="text-greem-600 border-2 border-emerald-300 bg-green-100 w-20 px-2 text-sm m-2 rounded-2xl">
                Delivered
              </p>
            </div>

            <p className="font-bold text-gray-700 text-lg">Rs. 1,240</p>
          </div>
        </div>

        <div className="flex justify-end gap-5 mb-0 bg-white px-10 py-4 -mx-5">
          <button
            onClick={() => setRecentModal(false)}
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-200  text-gray-600 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* modal code for Products button Starts from here */}
      <Modal
        showModal={showItems}
        className="w-[60rem] h-auto rounded-2xl overflow-hidden shadow-2xl mt-8 px-5 !bg-white"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex w-300 relative right-5 justify-around">
          <div>
            <p className="text-white/80 font-bold text-lg relative right-60">
              Items to Purchase
            </p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setItemsModal(false)}
            />
          </div>
        </div>

        {/* Add Categories to select items */}
        <div className="bg-gray-100 px-7 py-2 w-300 relative right-4 mb-3">
          <p className="text-lg font-semibold text-gray-600 py-1">
            Select Medicines
          </p>
          <p className="text-sm text-gray-400 ">
            Choose medicines and add them in your purchase order or cart.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-70 justify-around text-lg mt-2">
          <div className="flex gap-45">
            <input
              type="text"
              placeholder="Search Medicine"
              className="border-2 border-gray-200 py-2 px-2 rounded-lg"
            />
            <IoSearch className="h-7 w-7 relative right-43 mt-2 cursor-pointer" />
          </div>
          <div className="flex gap-4 border-2 border-gray-200 bg- pl-3 rounded-lg">
            {/* <select name="Filter Products" id="" className="h-10 w-40 px-3">
              <option value="All">All</option>
              <option value="PainKiller">Pain Killer</option>
              <option value="Vitamins">Vitamins</option>
              <option value="New">Add Category</option>
              <div>

              </div>

              <input
                type="text"
                name="text"
                placeholder="Add categroy"
                className="w-10 border-2 border-gray-400"
              />
            </select> */}
          </div>
        </div>

        {/* Add Medicines Name */}
        <div className="grid grid-cols-2 mt-5 gap-4 ml-2">
          {/* Product 1 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input type="checkbox" className="w-4 h-4 relative top-8 mr-1" />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input
                type="checkbox"
                className="w-4 h-4 relative top-8 right-1 mr-1"
              />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input
                type="checkbox"
                className="w-4 h-4 relative top-8 right-1 mr-1"
              />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input
                type="checkbox"
                className="w-4 h-4 relative top-8 right-1 mr-1"
              />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 5 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input
                type="checkbox"
                className="w-4 h-4 relative top-8 right-1 mr-1"
              />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product 6 */}
          <div className="border-2 borde-gray-30 flex p-3 w-110 rounded-lg">
            <div>
              <input
                type="checkbox"
                className="w-4 h-4 relative top-8 right-1 mr-1"
              />
            </div>
            <div>
              {/* Product detail */}
              <div className="flex justify-center w-100 gap-20 font-semibold text-gray-600 text-lg">
                <p>Paracetamol 250mg</p>
                <p className="relative left-4">Rs. 10/per</p>
              </div>
              {/* Categroy display */}
              <div className="flex text-sm gap-2 text-gray-500 px-1 relative left-9">
                <p>Pain Killer</p>
                <div className="bg-gray-400 rounded-full h-2 w-2 flex self-center"></div>
                <p>300 Items</p>
              </div>
              <div className="flex justify-around gap-20 relative left-1 mt-1">
                <p className="border-2 border-emerald-500 bg-green-200 rounded-full px-2 text-green-700 relative left-1">
                  Instock
                </p>
                <div className="relative left-7">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    -
                  </button>

                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) =>
                      setQuantity(Math.max(1, Number(e.target.value)))
                    }
                    className="border-2 border-gray-300 rounded-sm w-20 h-6 inline-flex text-center pl-3 pr-2 mx-1"
                  />

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="text-lg hover:bg-gray-200 px-2 rounded-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Product and amount */}
        <div className="flex justify-center border-2 border-gray-200 rounded-lg my-5 py-2 gap-80 w-150 relative left-40">
          <div className="text-xm text-gray-600 mt-2">
            <p className="font-semibold text-lg">Total Products</p>
            <p className="text-xm">
              <span>4</span> Items Selected
            </p>
          </div>
          <div className="text-gray-500 text-lg">
            <p>Total Amount</p>
            <p className="text-green-700 font-bold text-2xl">
              Rs. <span className="">850</span>
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-5 mb-0 bg-white px-10 py-5 -mx-5">
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-blue-300 bg-emerald-500 text-white hover:bg-green-600 transition"
          >
            Create New Order
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg border border-blue-300 bg-yellow-500 text-white hover:bg-yellow-700 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setItemsModal(false)}
            type="button"
            className="px-4 py-2 rounded-lg border border-gray-200  text-gray-600 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* modal code Start from here */}
      <Modal
        showModal={showAddSupplier}
        className="w-[60rem] rounded-2xl overflow-hidden shadow-2xl mt-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Add Suppliers
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Fill form to add new supplier.
            </p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setShowAddSupplier(false)}
            />
          </div>
        </div>

        {/* Create form here */}
        <form className="bg-white p-4 grid grid-cols-2 gap-x-6 gap-y-3">
          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Supplier Name</Label>
            <Input
              type="text"
              placeholder="Enter Supplier Name"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Company Name</Label>
            <Input
              type="text"
              placeholder="Enter Company Name"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Phone Name</Label>
            <Input
              type="text"
              placeholder="Enter Phone Number"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Email</Label>
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">City</Label>
            <Input
              type="text"
              placeholder="Enter City"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Country</Label>
            <Input
              type="text"
              placeholder="Enter Country"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Description</Label>
            <textarea
              placeholder="Description"
              className="w-230 h-16 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </form>

        <div className="flex justify-end gap-2 bg-white px-4 pb-4">
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg bg-[#14967f] text-white text-sm font-medium hover:bg-[#12856f] shadow-md transition"
          >
            Add Supplier
          </button>

          <button
            onClick={() => setShowAddSupplier(false)}
            type="button"
            className="px-4 py-1.5 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Supplier;
