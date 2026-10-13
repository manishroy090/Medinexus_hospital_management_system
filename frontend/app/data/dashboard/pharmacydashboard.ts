   const cards = [
    {
      label: "Total Medicines",
      total: "1,248",
    icons: "/pharmacy_icons/syringe.png" ,
    },
    {
      label: "Pending Orders",
      total: "2000",
      icons: "/pharmacy_icons/pending.png" 
    },
    {
      label: "Low Stock Items",
      total: "4000",
      icons: "/pharmacy_icons/out-of-stock.png" ,
    },
    {
      label: "Expiring Soon",
      total: "5000",
      icons:  "/pharmacy_icons/hourglass.png" 
    }
  ];


 const expiryAlerts = [
  {
    id: 1,
    medicine: "Amoxicillin 250mg",
    batchNo: "AX2201",
    quantity: 120,
    unit: "units",
    expiryDate: "2026-09-26",
    daysLeft: 5,
    alertLevel: "Critical"
  },
  {
    id: 2,
    medicine: "Paracetamol 500mg",
    batchNo: "PC1187",
    quantity: 300,
    unit: "units",
    expiryDate: "2026-09-29",
    daysLeft: 8,
    alertLevel: "High"
  },
  {
    id: 3,
    medicine: "Cetirizine 10mg",
    batchNo: "CT3345",
    quantity: 80,
    unit: "units",
    expiryDate: "2026-10-05",
    daysLeft: 14,
    alertLevel: "Medium"
  },
  {
    id: 4,
    medicine: "Azithromycin 500mg",
    batchNo: "AZ0092",
    quantity: 45,
    unit: "units",
    expiryDate: "2026-09-24",
    daysLeft: 3,
    alertLevel: "Critical"
  },
  {
    id: 5,
    medicine: "Metformin 500mg",
    batchNo: "MF7761",
    quantity: 200,
    unit: "units",
    expiryDate: "2026-10-15",
    daysLeft: 24,
    alertLevel: "Low"
  },
  {
    id: 6,
    medicine: "Ibuprofen 400mg",
    batchNo: "IB2298",
    quantity: 150,
    unit: "units",
    expiryDate: "2026-09-30",
    daysLeft: 9,
    alertLevel: "High"
  },
  {
    id: 7,
    medicine: "Omeprazole 20mg",
    batchNo: "OM4456",
    quantity: 90,
    unit: "units",
    expiryDate: "2026-10-01",
    daysLeft: 10,
    alertLevel: "High"
  },
  {
    id: 8,
    medicine: "Vitamin D3 1000IU",
    batchNo: "VD8821",
    quantity: 60,
    unit: "units",
    expiryDate: "2026-11-10",
    daysLeft: 50,
    alertLevel: "Low"
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

  export {cards,expiryAlerts,lowStockMedicines}