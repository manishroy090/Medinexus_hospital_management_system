"use client";
import { useEffect, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { FaWallet } from "react-icons/fa6";

const Digital = () => {
  return (
    <>
      <div className="my-3 flex items-center gap-4">
        <div className="h-[2] bg-gray-200 flex-1" />
        <span className="text-sm font-semibold text-gray-500">
          Pay with digital wallet
        </span>
        <div className="h-[2] bg-gray-200 flex-1" />
      </div>

      <form className="w-full h-full py-5.5">
        <div className="mb-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 flex items-center gap-2">
          <FaWallet className="text-lg bg-gray-200 w-5 h-5 " />
          <p>
            <span className="block ">
              Secure and fast payment using your digital wallet
            </span>
            <span className="text-gray-400">
              Kept your receipt and enter the details below to activate your
              subscription.
            </span>
          </p>
        </div>

        <div>
          <div className="mb-6 grid grid-cols-4 gap-3">
            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Esewa"
                defaultChecked
                className="h-4 w-4"
              />
              <img
                src="/images/payment/esewa.png"
                alt="Esewa"
                className="w-8 h-8"
              />
              Esewa
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Khalti"
                className="h-4 w-4 "
              />
              <img
                src="/images/payment/khalti.png"
                alt="Khalti"
                className="w-8 h-8"
              />
              Khalti
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Paypal"
                className="h-4 w-4"
              />
              <img
                src="/images/payment/paypal.png"
                alt="Paypalr"
                className="w-6 h-6"
              />
              Paypal
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Google Pay"
                className="h-4 w-4"
              />
              <img
                src="/images/payment/googlepay.png"
                alt="Google Pay"
                className="w-6 h-6"
              />
              Google Pay
            </label>
          </div>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Wallet Number / Registered Mobile Number
          </label>
          <input
            type="text"
            placeholder="e.g. 98******** "
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Name on Wallet Account
          </label>
          <input
            type="text"
            placeholder="Full name as per wallet account"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Transaction ID
          </label>
          <input
            type="text"
            placeholder="e.g. 1234567890 (if available)"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="text-gray-400 flex items-center ml-2 pb-3">
          <PiWarningCircleLight className="w-5 h-5" />
          <p>
            <span className="block">
              After completing the payment, your subscription will be activated
              automatically.
            </span>
            <span className="block">
              Make sure to use the same mobile number that is registered with
              your wallet.
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="h-12 w-full flex items-center justify-center bg-gray-700 rounded-lg text-md font-semibold text-white shadow-sm transition hover:bg-gray-900 mb-4"
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default Digital;
