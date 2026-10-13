import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiUserCheck } from "react-icons/fi";
import { LiaUserLockSolid } from "react-icons/lia";
import { RiTimerLine } from "react-icons/ri";

const alertCards = [
  {
    label: "Active Alerts",
    total: "3",
    icon: <HiOutlineBellAlert className="text-red-500 text-3xl mt-3" />,
  },
  {
    label: "Acknowledged",
    total: "2",
    icon: <FiUserCheck className="text-blue-500 text-3xl mt-2" />,
  },
  {
    label: "Resolved Today",
    total: "8",
    icon: <LiaUserLockSolid className="text-green-500 text-3xl mt-2" />,
  },
  {
    label: "Response Time",
    total: "3 min",
    icon: <RiTimerLine className="text-blue-500 text-3xl mt-2" />,
  },
];


const patientAlert = [
  {
    id: 1,
    patient: "Ramesh Bisarjan",
    bed: "12S",
    issue: "Oxygen saturation critically low",
    SP02: "89%",
    lastUpdated: "2min ago",
    status: "Critical",
  },
  {
    id: 2,
    patient: "Sita Thapa",
    bed: "08A",
    issue: "Heart rate above normal range",
    SP02: "94%",
    lastUpdated: "4min ago",
    status: "Warning",
  },
  {
    id: 3,
    patient: "Bibek Joshi",
    bed: "15B",
    issue: "Blood pressure slightly elevated",
    SP02: "93%",
    lastUpdated: "1min ago",
    status: "Warning",
  },
  {
    id: 4,
    patient: "Anisha Karki",
    bed: "10C",
    issue: "Oxygen level requires monitoring",
    SP02: "91%",
    lastUpdated: "3min ago",
    status: "Critical",
  },
  {
    id: 5,
    patient: "Anjana Khatri",
    bed: "12C",
    issue: "Oxygen level requires monitoring",
    SP02: "98%",
    lastUpdated: "1min ago",
    status: "Critical",
  },
];


export { alertCards, patientAlert };
