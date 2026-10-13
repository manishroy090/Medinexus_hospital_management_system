import { MdPeopleAlt } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";

const Queuecards = [
  {
    label: "Waiting",
    total: "18",
    icon: <MdPeopleAlt   className="text-emerald-500 text-3xl mt-3" />,
  },
  {
    label: "In Consuitation",
    total: "100",
    icon: <FaStethoscope className="text-blue-500 text-2xl mt-4" />,
  },
  {
    label: "Served Today",
    total: "550",
    icon: <FaClipboardCheck  className="text-green-500 text-2xl mt-4" />,
  },
  {
    label: "Avg. Waiting Time",
    total: "1 hrs",
    icon: <FaClockRotateLeft  className="text-red-500 text-2xl mt-5" />,
  },
];

export { Queuecards };
