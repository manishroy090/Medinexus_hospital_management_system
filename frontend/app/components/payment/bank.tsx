"use client";
import { useEffect, useState } from "react";

import { PiWarningCircleLight } from "react-icons/pi";
import { BsBank } from "react-icons/bs";

const Bank = () => {
  const [bank, setbank] = useState<[]>([]);

  useEffect(() => {
    const banks = [
      {
        name: "Nepal Rastriya Bank",
      },
      {
        name: "SBI Bank",
      },
      {
        name: "NIC Asia Bank",
      },
      {
        name: "Central Bank of India",
      },
      {
        name: "Bank of Austalia",
      },
    ];
    setbank(banks);
  }, []);

  return (
    <>
      <div className="my-3 flex items-center gap-4">
        <div className="h-[2] bg-gray-200 flex-1" />
        <span className="text-sm font-semibold text-gray-500">
          Pay with bank
        </span>
        <div className="h-[2] bg-gray-200 flex-1" />
      </div>

      <form className="w-full h-full py-10">
        <div className="mb-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 flex items-center gap-2">
          <BsBank className="text-lg bg-gray-200 w-5 h-5 " />
          <span>Complete your payment using bank transfer.</span>
        </div>

        <div className="mb-5">
          <div className="col-span-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Select Bank
            </label>

            <select className="w-full border rounded-md h-10 px-3">
              <option value="">Select Bank</option>
              {bank?.map((banks: any) => (
                <option key={banks.name} value={banks.name}>
                  {banks.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Account Holder Name
          </label>
          <input
            type="text"
            placeholder="Account holder full name"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Account Number
          </label>
          <input
            type="text"
            placeholder="Enter account number"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Transfer Refrence
          </label>
          <input
            type="text"
            placeholder="Enter transaction/refrence ID"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="text-gray-400 flex items-center ml-2 pb-3">
          <PiWarningCircleLight className="w-5 h-5" />
          <p>
            Your subscription will be activated after the transfer if varified
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

export default Bank;
