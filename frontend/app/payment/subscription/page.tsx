const subscription = () => {
  return (
    <>
      <div className="flex mt-25 gap-5 mx-20 ">
        {/* Basic Package */}
        <div className="flex flex-col bg-white px-20 py-11 w-200 border border-emerald-100 rounded-3xl shadow-xl hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300">
          <div className="mb-5 font-bold text-emerald-700 bg-emerald-100 w-50 uppercase border border-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
            Basic Plan
          </div>

          <h2 className="text-2xl text-gray-800 font-extrabold">
            Basic Package
          </h2>

          <div className="mt-6 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
            <div className="flex items-center gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                {" "}
                $1.99{" "}
              </span>
              <span className="text-sm font-medium text-gray-500">/ month</span>
            </div>

            <p className="text-xs text-emerald-700 font-medium mt-2">
              Basic modules included
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-white border border-emerald-700 font-bold p-4 rounded-xl flex justify-center items-center bg-emerald-700  mt-6 mb-6 hover:bg-emerald-800 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
          >
            Choose Plan
          </button>

          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-5" />

          {/* Features */}
          <div className="flex items-center justify-between mb-3">
            <h3 className=" text-base text-gray-800 font-bold">
              What's included
            </h3>

            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
              Features
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
              <span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                ✘
              </span>
              <span className="font-medium">Laboratory module</span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                ✘
              </span>
              <span className="font-medium">Pharmacy module</span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                10
              </span>
              <span>
                users{" "}
              </span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                10
              </span>
              <span>
                <span className="text-xs text-gray-500 mt-1">
                  SMS notifications per month
                </span>
              </span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                ✘
              </span>
              <span>
                <span className="font-bold text-gray-800">Unlimited</span>{" "}
                branches
              </span>
            </p>
          </div>
        </div>

        {/* Pro Package */}
        <div className="flex flex-col bg-green-100 px-20 py-11 w-200 border border-emerald-100 rounded-3xl shadow-xl hover:border-emerald-300 hover:-translate-y-0.5 transition duration-300 relative bottom-10">
          <div className="mb-5 font-bold text-emerald-700 bg-emerald-100 w-50 uppercase border border-emerald-100 px-4 py-2 rounded-full flex items-center justify-center">
            Pro Plan
          </div>

          <h2 className="text-2xl text-gray-800 font-extrabold">
            Pro Package
          </h2>

          <div className="mt-6 p-5 bg-emerald-50 border border-emerald-100 rounded-2xl">
            <div className="flex items-center gap-1">
              <span className="text-4xl font-extrabold text-gray-900">
                {" "}
                $5.99{" "}
              </span>
              <span className="text-sm font-medium text-gray-500">/ month</span>
            </div>

            <p className="text-xs text-emerald-700 font-medium mt-2">
              Pro modules included
            </p>
          </div>

          <button
            type="submit"
            className="w-full text-white border border-emerald-700 font-bold p-4 rounded-xl flex justify-center items-center bg-emerald-700  mt-6 mb-6 hover:bg-emerald-800 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
          >
            Choose Plan
          </button>

          {/* Divider Line */}
          <div className="border-t border-gray-200 mb-5" />

          {/* Features */}
          <div className="flex items-center justify-between mb-3">
            <h3 className=" text-base text-gray-800 font-bold">
              What's included
            </h3>

            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
              Features
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
                50
              </span>
              <span>
                users{" "}
              </span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                1000
              </span>
              <span>
                <span className="text-xs text-gray-500 mt-1">
                  SMS notifications per month
                </span>
              </span>
            </p>

            <p className="text-gray-600 p-2 flex items-center gap-3 hover:bg-gray-50 hover:rounded-xl transition duration-200">
              <span className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                3
              </span>
              <span>
                branches
              </span>
            </p>
          </div>
        </div>

        {/* Enterprise Package */}
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

          <button
            type="submit"
            className="w-full text-white border border-emerald-700 font-bold p-4 rounded-xl flex justify-center items-center bg-emerald-700  mt-6 mb-6 hover:bg-emerald-800 hover:shadow-lg hover:-translate-y-0.5 transition duration-200"
          >
            Choose Plan
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
      </div>
    </>
  );
};
export default subscription;
