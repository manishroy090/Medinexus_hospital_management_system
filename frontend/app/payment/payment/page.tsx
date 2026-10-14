"use client";
import { BsBank } from "react-icons/bs";
import { PiWarningCircleLight } from "react-icons/pi";
import { Label } from "@/components/medinexus/label";
import { useEffect, useState } from "react";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { FaWallet } from "react-icons/fa6";

const PurchaseOrder = () => {
  const [countries, setcountries] = useState<[]>([]);
  const [bank, setbank] = useState<[]>([]);

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
    <div className="flex justify-betwee w-400 border border-gray-300 bg-white rounded-2xl mt-30 items-center ml-50">
      {/* Left Side */}
      <div className="flex flex-col bg-white px-20 py-11 w-200 border border-emerald-100 rounded-3xl shadow-xl hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300">
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
      <div className="bg-white py-16 w-200 border border-emerald-100 rounded-3xl shadow-xl border-l bg-white px-16 hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300">
        <div className="flex flex-col">
          <div className="mb-6 grid grid-cols-4 gap-3">
            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Card"
                defaultChecked
                className="h-4 w-4"
              />
              Pay by Card
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Cash"
                className="h-4 w-4 "
              />
              Pay by Cash
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by bank"
                className="h-4 w-4"
              />
              Pay by bank
            </label>

            <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
              <input
                type="radio"
                name="payment-method"
                value="Pay by Digital Wallet"
                className="h-4 w-4"
              />
              Digital Wallet
            </label>
          </div>

          {/* Paying with Cards */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-[2] bg-gray-200 flex-1" />
            <span className="text-sm font-semibold text-gray-500">
              Pay with card
            </span>
            <div className="h-[2] bg-gray-200 flex-1" />
          </div>

          <form className="w-full">
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
                    <input
                      type="date"
                      className="w-full text-sm text-gray-400"
                    />
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
                Your subscription will be activated after the varification of
                card details.
              </p>
            </div>
            <button
              type="submit"
              className="h-12 w-full flex items-center justify-center bg-gray-700 rounded-lg text-md font-semibold text-white shadow-sm transition hover:bg-gray-900 mb-4"
            >
              Pay
            </button>
          </form>

          {/* Paying with bank */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-[2] bg-gray-200 flex-1" />
            <span className="text-sm font-semibold text-gray-500">
              Pay with Bank
            </span>
            <div className="h-[2] bg-gray-200 flex-1" />
          </div>

          <form className="w-full">
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
                Your subscription will be activated after the transfer if
                varified
              </p>
            </div>

            <button
              type="submit"
              className="h-12 w-full flex items-center justify-center bg-gray-700 rounded-lg text-md font-semibold text-white shadow-sm transition hover:bg-gray-900 mb-4"
            >
              Pay
            </button>
          </form>

          {/* Pay with Cash */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-[2] bg-gray-200 flex-1" />
            <span className="text-sm font-semibold text-gray-500">
              Pay with Cash
            </span>
            <div className="h-[2] bg-gray-200 flex-1" />
          </div>

          <form className="w-full">
            <div className="mb-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 flex items-center gap-2">
              <PiBuildingOfficeDuotone className="text-lg bg-gray-200 w-5 h-5 " />
              <p>
                <span className="block ">
                  Complete your payment in cash at our office.
                </span>
                <span className="text-gray-400">
                  Kept your receipt and enter the details below to activate your
                  subscription.
                </span>
              </p>
            </div>

            <div className="mb-5">
              <div className="col-span-4">
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Payment Location
                </label>

                <select className="w-full border rounded-md h-10 px-3">
                  <option value="">Select payment location</option>
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
                Receipt Number
              </label>
              <input
                type="text"
                placeholder="Enter receipt number"
                className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Payment Date
              </label>
              <input
                type="date"
                placeholder="Enter account number"
                className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Amount paid
              </label>
              <input
                type="text"
                placeholder="Enter amount(e.g. 1000)"
                className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
              />
            </div>

            <div className="text-gray-400 flex items-center ml-2 pb-3">
              <PiWarningCircleLight className="w-5 h-5" />
              <p>
                Make sure to keep your payment receipt. Your subscription will
                be activated after we vaify the payment details.
              </p>
            </div>

            <button
              type="submit"
              className="h-12 w-full flex items-center justify-center bg-gray-700 rounded-lg text-md font-semibold text-white shadow-sm transition hover:bg-gray-900 mb-4"
            >
              Pay
            </button>
          </form>

          {/* Pay with digital wallet */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-[2] bg-gray-200 flex-1" />
            <span className="text-sm font-semibold text-gray-500">
              Pay with digital wallet
            </span>
            <div className="h-[2] bg-gray-200 flex-1" />
          </div>

          <form className="w-full">
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
                <span className="block">After completing the payment, your subscription will be activated automatically.</span>
                <span className="block">Make sure to use the same mobile number that is registered with your wallet.</span>
              </p>
            </div>

            <button
              type="submit"
              className="h-12 w-full flex items-center justify-center bg-gray-700 rounded-lg text-md font-semibold text-white shadow-sm transition hover:bg-gray-900 mb-4"
            >
              Pay
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
