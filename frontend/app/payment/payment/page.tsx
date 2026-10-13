"use client";

const PurchaseOrder = () => {
  const products = [
    {
      name: "Paracetamol 500mg",
      price: "Rs. 25.00",
      unit: "Rs. 25.00 per strip",
      qty: 1,
    },
    {
      name: "Vitamin C 500mg",
      price: "Rs. 120.00",
      unit: "Rs. 60.00 per strip",
      qty: 2,
    },
    {
      name: "Cetirizine 10mg",
      price: "Rs. 30.00",
      unit: "Rs. 30.00 per strip",
      qty: 1,
    },
    {
      name: "Adhesive Bandage Pack",
      price: "Rs. 60.00",
      unit: "Rs. 60.00 per pack",
      qty: 2,
    },
    {
      name: "Calcium + Vitamin D3",
      price: "Rs. 180.00",
      unit: "Rs. 90.00 per strip",
      qty: 2,
    },
  ];

  return (
    <div className="flex justify-betwee w-400 border border-gray-300 bg-white rounded-2xl mt-30 items-center ml-50">
      {/* Order Summary */}
      <div className="flex flex-col bg-white px-[35px]">
        <div>
          <p className="text-lg text-gray-500 mb-1">Total Amount</p>
          <h1 className="text-[27px] font-semibold text-gray-700">
            Rs. 129.00
          </h1>
        </div>

        <div className="flex flex-col mt-7 gap-3">
          <div>
            <h1 className="text-lg text-gray-500 mb-1 w-full border-b-1 border-gray-300">
              Order Summary
            </h1>

            <div className="w-full">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="flex justify-between gap-100 text-lg text-gray-600 mb-3 mt-4"
                >
                  <div>
                    <p className="font-semibold ">{product.name}</p>
                    <p className="text-sm">Qty: {product.qty}</p>
                  </div>
                  <div>
                    <p className="font-semibold ">{product.price}</p>
                    <p className="text-sm">{product.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-l border-gray-200 bg-white px-16 py-10">
        <div className="flex flex-col">
          <form className="w-full">

            <div className="mb-6 grid grid-cols-3 gap-3">
              <label className="text-md text-gray-700 p-3 font-semibold flex cursor-pointer items-center gap-2 border border-gray-200 rounded-lg transition hover:border-gray-400">
                <input
                  type="radio"
                  name="payment-method"
                  value="Cash on Delivery"
                  className="h-4 w-4 "
                />
                Cash on Delivery
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

            <div className="my-6 flex items-center gap-4">
              <div className="h-[2] bg-gray-200 flex-1" />
              <span className="text-sm font-semibold text-gray-500">
                Pay with card
              </span>
              <div className="h-[2] bg-gray-200 flex-1" />
            </div>

            {/* Email */}
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

            {/* Card */}
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

            {/* Name on Card */}
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

            {/* Country */}
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Country or region
              </label>

              <div className="mb-3 flex h-11 items-center border border-gray-300 px-3 shadow-sm rounded-lg">
                <select className="w-full text-sm text-gray-700">
                  <option value="United States">Select Country</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Nepal">Nepal</option>
                  <option value="India">India</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="ZIP code"
                className="h-11 w-full px-3 text-sm text-gray-800 border border-gray-300 rounded-lg shadow-sm outline-none transition focus:border-black focus:ring-1"
              />
            </div>

            {/* Pay Button */}
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
