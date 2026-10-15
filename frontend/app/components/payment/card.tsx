"use client";

import { useEffect, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa6";

const Cash = () => {
  const [countries, setcountries] = useState<[]>([]);

  useEffect(() => {
    const country = [
      {
        name: "United State",
      },
      {
        name: "United Kingdom",
      },
      {
        name: "Nepal",
      },
      {
        name: "India",
      },
      {
        name: "Australia",
      },
    ];
    setcountries(country);
  }, []);
  return (
    <>
      <div className="my-3 flex items-center gap-4">
        <div className="h-[2] bg-gray-200 flex-1" />
        <span className="text-sm font-semibold text-gray-500">
          Pay with card
        </span>
        <div className="h-[2] bg-gray-200 flex-1" />
      </div>

      <form className="w-full h-155">
        <div className="mb-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 flex items-center gap-2">
          <FaRegCreditCard className="text-lg bg-gray-200 w-5 h-5 " />
          <span>Complete your payment using card.</span>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Card information
          </label>

          <div className="border border-gray-300 rounded-lg shadow-sm focus:border-black focus:ring-2">
            <div className="flex h-11 items-center border-b border-gray-200 px-3">
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="w-full text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-2">
              <div className="flex h-11 items-center border-r border-gray-200 px-3">
                <input type="date" className="w-full text-sm text-gray-400" />
              </div>
              <div className="flex h-11 items-center px-3">
                <input
                  type="text"
                  placeholder="CVC"
                  maxLength={4}
                  className="w-full text-sm text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Name on card
          </label>
          <input
            type="text"
            placeholder="Full name on card"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="mb-5">
          <div className="mb-5">
            <div className="col-span-4">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Select Country
              </label>

              <select className="w-full border rounded-md h-10 px-3">
                <option value="">Select Country</option>
                {countries?.map((country: any) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <input
            type="text"
            placeholder="ZIP code"
            className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
          />
        </div>

        <div className="text-gray-400 flex items-center ml-2 pb-3">
          <PiWarningCircleLight className="w-5 h-5" />
          <p>
            Your subscription will be activated after the varification of card
            details.
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

export default Cash;
