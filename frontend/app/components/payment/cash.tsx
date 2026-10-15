"use client";
import { useEffect, useState } from "react";
import { PiWarningCircleLight } from "react-icons/pi";
import { PiBuildingOfficeDuotone } from "react-icons/pi";

const Cash = () => {

    const [location, setlocation] = useState<[]>([]);

  useEffect(() => {
    const locations = [
      {
        name: "Kathmandu office",
      },
      {
        name: "Mahendranagar office",
      },
      {
        name: "Janakpur office",
      },
      {
        name: "Sidney office",
      },
      {
        name: "Mumbai office",
      },
    ];
    setlocation(locations);
  }, []);
  return (
    <>
      <div className="my-3 flex items-center gap-4">
        <div className="h-[2] bg-gray-200 flex-1" />
        <span className="text-sm font-semibold text-gray-500">
          Pay with cash
        </span>
        <div className="h-[2] bg-gray-200 flex-1" />
      </div>
      
      <form className="w-full h-full py-12 relative bottom-5">
        <div className="mb-5 bg-gray-100 border border-gray-200 rounded-2xl p-5 flex items-center gap-2">
          <PiBuildingOfficeDuotone className="w-5 h-5" />
          <p>Complete your payment in cash at our office.</p>
        </div>

        <div className="mb-5">
          <div className="col-span-4">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Select location
            </label>

            <select className="w-full border rounded-md h-10 px-3">
              <option value="">Select location</option>
              {location?.map((location: any) => (
                <option key={location.name} value={location.name}>
                  {location.name}
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
            className="h-11 w-full px-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Payment Date
          </label>
          <input
            type="date"
            className="h-11 w-full px-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Amount Paid
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            className="h-11 w-full px-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="text-gray-400 flex items-start gap-2 pb-3">
          <PiWarningCircleLight className="w-5 h-5 shrink-0" />
          <p>
            Your subscription will be activated after we verify your payment
            details.
          </p>
        </div>

        <button
          type="submit"
          className="h-12 w-full bg-gray-700 rounded-lg font-semibold text-white hover:bg-gray-900"
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default Cash;
