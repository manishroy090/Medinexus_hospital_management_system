import { MdMonitorHeart } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuShieldAlert } from "react-icons/lu";

const PatientCards = [
  {
    label: "Total Patients",
    total: "100",
    icon: <MdMonitorHeart className="text-yellow-500 text-3xl mt-2" />,
  },
  {
    label: "Stable Patients",
    total: "50",
    icon: <IoShieldCheckmarkOutline className="text-blue-500 text-3xl mt-2" />,
  },
  {
    label: "High Risk Patients",
    total: "25",
    icon: <FaArrowTrendUp  className="text-green-500 text-2xl mt-3" />,
  },
  {
    label: "Critical Patients",
    total: "25",
    icon: <LuShieldAlert className="text-red-500 text-3xl mt-2" />,
  },
];
export  {PatientCards};