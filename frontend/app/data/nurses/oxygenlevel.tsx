import { MdMonitorHeart } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { LuShieldAlert } from "react-icons/lu";

const oxygencards = [
  {
    label: "Avg SpO2",
    total: "96%",
    icon: <MdMonitorHeart className="text-yellow-500 text-3xl mt-2" />,
  },
  {
    label: "Normal Range",
    total: "36",
    icon: <IoShieldCheckmarkOutline className="text-blue-500 text-3xl mt-2" />,
  },
  {
    label: "Low Saturation",
    total: "5",
    icon: <FaArrowDownWideShort className="text-green-500 text-2xl mt-2" />,
  },
  {
    label: "Critical",
    total: "3",
    icon: <LuShieldAlert className="text-red-500 text-3xl mt-2" />,
  },
];



export  {oxygencards};
