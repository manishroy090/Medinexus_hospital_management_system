import { LuShieldAlert } from "react-icons/lu";

const cards = [
    {
      label: "Patient Under Care",
      total: "1,248",
    icons: "/nurses_icons/health-support.png" ,
    },
    {
      label: "Critical Alerts",
      total: "2000",
      icons: "/nurses_icons/critical.png" 
    },
    {
      label: "Medications Due",
      total: "4000",
      icons: "/nurses_icons/check.png" ,
    },
    {
      label: "Vitals Recorded Today",
      total: "5000",
      icons:  "/nurses_icons/medical-report.png" 
    }
  ];


const medicationSchedule = [
  {
    patient: "Emily Clark",
    medication: "Insulin",
    bed: "04A",
    time: "10:30 AM"
  },
  {
    patient: "John Carter",
    medication: "Antibiotics",
    bed: "07B",
    time: "11:15 AM"
  },
  {
    patient: "Sophia White",
    medication: "Pain Relief",
    bed: "03C",
    time: "12:00 PM"
  },
  {
    patient: "Maria Ryan",
    medication: "Pain Relief",
    bed: "02C",
    time: null // no time provided
  }
];
const lowStockMedicines = [
  {
    id: 1,
    medicine: "Paracetamol 500mg",
    category: "Tablet",
    availableQty: 24,
    reorderLevel: 50,
    supplier: "MedSupply Co.",
    shortfall: 26,
    status: "Low Stock",
    statusRecordedAt: "2026-09-21T09:15:00"
  },
  {
    id: 2,
    medicine: "Amoxicillin 250mg",
    category: "Capsule",
    availableQty: 12,
    reorderLevel: 40,
    supplier: "PharmaCare Ltd.",
    shortfall: 28,
    status: "Low Stock",
    statusRecordedAt: "2026-09-21T09:15:00"
  },
  {
    id: 3,
    medicine: "Ibuprofen 400mg",
    category: "Tablet",
    availableQty: 8,
    reorderLevel: 30,
    supplier: "MedSupply Co.",
    shortfall: 22,
    status: "Low Stock",
    statusRecordedAt: "2026-09-21T09:15:00"
  },
  {
    id: 4,
    medicine: "Azithromycin 500mg",
    category: "Tablet",
    availableQty: 15,
    reorderLevel: 35,
    supplier: "Zenith Pharma Distributors",
    shortfall: 20,
    status: "Low Stock",
    statusRecordedAt: "2026-09-20T18:40:00"
  },
  {
    id: 5,
    medicine: "Cetirizine 10mg",
    category: "Tablet",
    availableQty: 18,
    reorderLevel: 45,
    supplier: "PharmaCare Ltd.",
    shortfall: 27,
    status: "Low Stock",
    statusRecordedAt: "2026-09-20T18:40:00"
  },
  {
    id: 6,
    medicine: "Metformin 500mg",
    category: "Tablet",
    availableQty: 30,
    reorderLevel: 60,
    supplier: "National Drug House",
    shortfall: 30,
    status: "Low Stock",
    statusRecordedAt: "2026-09-20T14:05:00"
  },
  {
    id: 7,
    medicine: "Omeprazole 20mg",
    category: "Capsule",
    availableQty: 10,
    reorderLevel: 40,
    supplier: "Zenith Pharma Distributors",
    shortfall: 30,
    status: "Low Stock",
    statusRecordedAt: "2026-09-20T14:05:00"
  },
  {
    id: 8,
    medicine: "Amlodipine 5mg",
    category: "Tablet",
    availableQty: 22,
    reorderLevel: 50,
    supplier: "National Drug House",
    shortfall: 28,
    status: "Low Stock",
    statusRecordedAt: "2026-09-19T11:30:00"
  },
  {
    id: 9,
    medicine: "Cough Syrup (Dextromethorphan)",
    category: "Syrup",
    availableQty: 6,
    reorderLevel: 25,
    supplier: "MedSupply Co.",
    shortfall: 19,
    status: "Low Stock",
    statusRecordedAt: "2026-09-19T11:30:00"
  },
  {
    id: 10,
    medicine: "ORS Powder Sachets",
    category: "Sachet",
    availableQty: 14,
    reorderLevel: 60,
    supplier: "PharmaCare Ltd.",
    shortfall: 46,
    status: "Low Stock",
    statusRecordedAt: "2026-09-18T16:20:00"
  },
  {
    id: 11,
    medicine: "Diclofenac Gel 1%",
    category: "Topical",
    availableQty: 9,
    reorderLevel: 25,
    supplier: "Zenith Pharma Distributors",
    shortfall: 16,
    status: "Low Stock",
    statusRecordedAt: "2026-09-18T16:20:00"
  },
  {
    id: 12,
    medicine: "Insulin Glargine Injection",
    category: "Injection",
    availableQty: 4,
    reorderLevel: 15,
    supplier: "National Drug House",
    shortfall: 11,
    status: "Low Stock",
    statusRecordedAt: "2026-09-17T08:50:00"
  }
];

  export {cards,medicationSchedule,lowStockMedicines}