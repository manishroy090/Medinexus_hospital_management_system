"use client";
import { useState } from "react";

import Card from "@components/payment/card";
import Cash from "@/components/payment/cash";
import Bank from "@/components/payment/bank";
import Digital from "@/components/payment/digital";

const PurchaseOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="flex justify-between items-center w-400 border border-gray-300 bg-white rounded-2xl mt-20 items-center ml-50">
     
      {/* Left Side */}
      <div className="flex flex-col bg-white px-20 py-19 w-200 h-full border border-emerald-100 rounded-3xl shadow-xl hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300">
        <div className="mb-5 font-bold text-emerald-700 bg-emerald-100 w-50 uppercase border border-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
          Enterprise Plan
        </div>

        <h2 className="text-2xl text-gray-800 font-extrabold">
          Enterprise Package
        </h2>

        <div className="mt-6 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
          <div className="flex items-center gap-1">
            <span className="text-4xl font-extrabold text-gray-900">
              {" "}
              $9.99{" "}
            </span>
            <span className="text-sm font-medium text-gray-500">/ month</span>
          </div>

          <p className="text-xs text-emerald-700 font-medium mt-2">
            All essential modules included
          </p>
        </div>

        <button className="w-full text-white border border-emerald-700 font-bold p-4 rounded-xl flex justify-center items-center bg-emerald-700  mt-6 mb-6 hover:shadow-lg transition duration-200">
          Choosed Plan
        </button>

        {/* Divider Line */}
        <div className="border-t border-gray-200 mb-5" />

        {/* Features */}
        <div className="flex items-center justify-between mb-3">
          <h3 className=" text-base text-gray-800 font-bold">
            What's included
          </h3>

          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
            6 Features
          </span>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span className="font-medium">Appointment module</span>
          </p>

          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span className="font-medium">Laboratory module</span>
          </p>

          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span className="font-medium">Pharmacy module</span>
          </p>

          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span>
              <span className="font-bold text-gray-800">Unlimited</span>{" "}
              users{" "}
            </span>
          </p>

          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span>
              <span className="font-bold text-gray-800">10,000+ </span>
              <span className="text-xs text-gray-500 mt-1">
                SMS notifications per month
              </span>
            </span>
          </p>

          <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
            <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
              ✔
            </span>
            <span>
              <span className="font-bold text-gray-800">Unlimited</span>{" "}
              branches
            </span>
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-white py-16 w-200 h-full border border-emerald-100 rounded-3xl shadow-xl border-l bg-white px-16 hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300">
        <div className="flex flex-col">
          <div className="mb-6 grid grid-cols-4 gap-3">
            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="h-4 w-4"
              />
              Pay by Card
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Cash"
                checked={paymentMethod === "cash"}
                onChange={() => setPaymentMethod("cash")}
                className="h-4 w-4 "
              />
              Pay by Cash
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="h-4 w-4"
              />
              Pay by bank
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Digital Wallet"
                checked={paymentMethod === "digital"}
                onChange={() => setPaymentMethod("digital")}
                className="h-4 w-4"
              />
              Digital Wallet
            </label>
          </div>
          <div className="w-full">
            {paymentMethod === "card" && <Card />}

            {paymentMethod === "cash" && <Cash />}

            {paymentMethod === "bank" && <Bank />}

            {paymentMethod === "digital" && <Digital />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
