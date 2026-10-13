import { FaHeartbeat } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import { LuShieldAlert } from "react-icons/lu";

const heartrate = [
  {
    label: "Avg. Heart Rate",
    total: "84",
    icon: <FaHeartbeat className="text-orange-500 text-3xl mt-2" />,
  },
  {
    label: "Normal Range",
    total: "32",
    icon: <IoShieldCheckmarkOutline className="text-blue-500 text-3xl mt-2" />,
  },
  {
    label: "Elevated",
    total: "08",
    icon: <IoIosTrendingUp  className="text-green-500 text-3xl mt-2" />,
  },
  {
    label: "Critical",
    total: "02",
    icon: <LuShieldAlert className="text-red-500 text-3xl mt-3" />,
  },
];



export {heartrate};
