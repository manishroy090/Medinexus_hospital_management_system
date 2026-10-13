import { LuGauge } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { LuShieldAlert } from "react-icons/lu";

const bloodpressure = [
  {
    label: "Avg. BP",
    total: "84",
    icon: <LuGauge className="text-orange-500 text-3xl mt-2" />,
  },
  {
    label: "Normal Range",
    total: "28",
    icon: <FaRegCheckCircle className="text-blue-500 text-3xl mt-2" />,
  },
  {
    label: "Hypertensive",
    total: "11",
    icon: <FaArrowUpRightDots className="text-green-500 text-3xl mt-2" />,
  },
  {
    label: "Critical",
    total: "3",
    icon: <LuShieldAlert className="text-red-500 text-3xl mt-3" />,
  },
];

export { bloodpressure };
