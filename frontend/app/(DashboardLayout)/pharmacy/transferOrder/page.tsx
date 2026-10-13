"use client";
import { useState, useEffect, useCallback } from "react";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import Table from "@/components/medinexus/Table";
import Modal from "@/components/medinexus/Modal";
import Userscards from "@/components/medinexus/pharmacy/cards/transfer";
import { getTotalUseraccoringToType } from "@/services/Sum";
import SortBy from "@/components/medinexus/SortBy";
import { Ifilter } from "@/interface/IFilter";
import { AiOutlineFileExcel } from "react-icons/ai";
import Exportbtn from "@components/medinexus/Exportbtn";
import { excelExport } from "@/services/User";

const PurchaseOrder = () => {
  const [PendingTransfer, setPendingTransfer] = useState<number | string>(0);
  const [InTransit, setInTransit] = useState<number | string>(0);
  const [AwaitingPickup, setAwaitingPickup] = useState<number | string>(0);
  const [locations, setlocations] = useState<number | string>(0);
  // const [showModal, setShowModal] = useState(false);
  const [query, setquery] = useState<Ifilter>({
    search: null,
    filters: null,
    dateRange: { key: null, from: null, to: null },
    sort: { key: null, order: null },
  });

  const handleShorting = useCallback((value: string) => {
    setquery((filterValue) => ({
      ...filterValue,
      sort: { key: "id", order: value },
    }));
  }, []);

  //toggel modal code
  function openUserModal() {
    setShowModal(true);
  }

  const handleExport = async () => {
    const blob = await excelExport();
    return blob;
  };

  useEffect(() => {
    const { data: usercount } = getTotalUseraccoringToType();
    setPendingTransfer(
      usercount?.find(
        (item: { title: string; count: number }) =>
          item.title == "Pending Transfer",
      )?.total ?? 0,
    );
    setInTransit(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "In Transit",
      )?.total ?? 0,
    );
    setAwaitingPickup(
      usercount?.find(
        (item: { title: string; count: number }) =>
          item.title == "Awaiting Pickup",
      )?.total ?? 0,
    );
    setlocations(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Locations",
      )?.total ?? 0,
    );
  });

  const data = [
    {
      Medicine: "Paracetamol 500mg",
      Category: "Pain Relief",
      Manufacturer: "GSK",
      Unit_Price: "$5.50",
      Stock: 120,
      Status: "In Stock",
      Expiry_Date: "Dec 2027",
    },
    {
      Medicine: "Amoxicillin 500mg",
      Category: "Antibiotic",
      Manufacturer: "Pfizer",
      Unit_Price: "$8.75",
      Stock: 85,
      Status: "In Stock",
      Expiry_Date: "Aug 2027",
    },
    {
      Medicine: "Ibuprofen 400mg",
      Category: "Pain Relief",
      Manufacturer: "Abbott",
      Unit_Price: "$6.25",
      Stock: 64,
      Status: "In Stock",
      Expiry_Date: "Mar 2028",
    },
    {
      Medicine: "Cetirizine 10mg",
      Category: "Antihistamine",
      Manufacturer: "Novartis",
      Unit_Price: "$4.20",
      Stock: 45,
      Status: "Low Stock",
      Expiry_Date: "Jan 2027",
    },
    {
      Medicine: "Omeprazole 20mg",
      Category: "Gastrointestinal",
      Manufacturer: "AstraZeneca",
      Unit_Price: "$7.80",
      Stock: 92,
      Status: "In Stock",
      Expiry_Date: "Oct 2027",
    },
    {
      Medicine: "Azithromycin 500mg",
      Category: "Antibiotic",
      Manufacturer: "Pfizer",
      Unit_Price: "$9.50",
      Stock: 28,
      Status: "Low Stock",
      Expiry_Date: "Jun 2027",
    },
    {
      Medicine: "Metformin 500mg",
      Category: "Diabetes",
      Manufacturer: "Merck",
      Unit_Price: "$5.90",
      Stock: 110,
      Status: "In Stock",
      Expiry_Date: "Nov 2028",
    },
    {
      Medicine: "Losartan 50mg",
      Category: "Blood Pressure",
      Manufacturer: "Johnson & Johnson",
      Unit_Price: "$8.40",
      Stock: 72,
      Status: "In Stock",
      Expiry_Date: "Feb 2028",
    },
    {
      Medicine: "Atorvastatin 20mg",
      Category: "Cholesterol",
      Manufacturer: "Pfizer",
      Unit_Price: "$10.25",
      Stock: 19,
      Status: "Low Stock",
      Expiry_Date: "May 2027",
    },
    {
      Medicine: "Pantoprazole 40mg",
      Category: "Gastrointestinal",
      Manufacturer: "Sun Pharma",
      Unit_Price: "$6.75",
      Stock: 58,
      Status: "In Stock",
      Expiry_Date: "Sep 2028",
    },
    {
      Medicine: "Aspirin 75mg",
      Category: "Cardiovascular",
      Manufacturer: "Bayer",
      Unit_Price: "$3.50",
      Stock: 135,
      Status: "In Stock",
      Expiry_Date: "Jul 2028",
    },
    {
      Medicine: "Doxycycline 100mg",
      Category: "Antibiotic",
      Manufacturer: "Mylan",
      Unit_Price: "$7.25",
      Stock: 34,
      Status: "Low Stock",
      Expiry_Date: "Apr 2027",
    },
    {
      Medicine: "Salbutamol 4mg",
      Category: "Respiratory",
      Manufacturer: "GlaxoSmithKline",
      Unit_Price: "$5.85",
      Stock: 67,
      Status: "In Stock",
      Expiry_Date: "Dec 2027",
    },
  ];

  const [pharmacyData, setpharmacyData] = useState<[]>(data);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex justify-between">
        <h1>Medicines</h1>
        <Exportbtn handleExport={handleExport} />
      </div>

      <Userscards
        PendingTransfer={PendingTransfer}
        InTransit={InTransit}
        AwaitingPickup={AwaitingPickup}
        locations={locations}
      />

      <div className="flex justify-between content-fit">
        <SortBy handleShorting={handleShorting} />

        <div
          className="inline-flex w-38 items-center gap-2 px-4 py-2 bg-[#14967f] text-white border border-[#14967f]
        shadow-sm hover:shadow-md transition cursor-pointer select-none"
          onClick={openUserModal}
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-120dh41-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="AddOutlinedIcon"
          >
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
          </svg>
          <span className="text-sm font-medium leading-none">Add Medicine</span>
        </div>
      </div>

      {/* <Formmodal showmainFrom={showModal} hideModal={hideModal}/> */}

      <Table
        data={pharmacyData}
        // showaction={false}
        // columnRenderers={{
        // action: (value, row) => {
        // return (
        // <div className="flex space-x-8">
        //   <img
        //     src={"/laboratory_icons/flask/chemical-experiment.png"}
        //     className="w-8 cursor-pointer"
        //   />
        //   <img
        //     src={"/laboratory_icons/flask/volumetric-flask.png"}
        //     className="w-8 cursor-pointer"
        //   />
        // </div>
        // );
        // },
        // }}
        columns={[
          { title: "Medicine" },
          { title: "Category" },
          { title: "Manufacturer" },
          { title: "Unit Price" },
          { title: "Stock" },
          { title: "Status" },
          { title: "Expiry Date" },
        ]}
      />
    </div>
  );
};
export default PurchaseOrder;
