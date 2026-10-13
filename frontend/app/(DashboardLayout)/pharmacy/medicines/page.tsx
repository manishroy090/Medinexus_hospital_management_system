"use client";
import { useState, useEffect, useCallback } from "react";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import Datepicker from "@/components/medinexus/Datepicker";
import Table from "@/components/medinexus/Table";
import Modal from "@/components/medinexus/Modal";
import Userscards from "@/components/medinexus/pharmacy/cards/Medicinecards";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Userschema } from "@schemas/Users.Schema";
import { Iuser } from "@interface/Iuser";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { getUsers } from "@services/User";
import SortBy from "@/components/medinexus/SortBy";
import ProfilePictureUpload from "@/components/medinexus/ProfilePictureUpload";
import { getAllCountries } from "@services/Config";
import { getAllBloodGroup } from "@services/Config";
import { getAllRoles } from "@services/Roles";
import { createUser } from "@services/User";
import { getUser, updateUser, deleteUserById } from "@services/User";
import { getTotalUseraccoringToType } from "@/services/Sum";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeIcon from "@mui/icons-material/Mode";
import DeleteIcon from "@mui/icons-material/Delete";
import Custompagination from "@/components/medinexus/Custompagination";
import { excelExport } from "@/services/User";
import { Ifilter } from "@/interface/IFilter";
import Exportbtn from "@components/medinexus/Exportbtn";
import { Link, X } from "lucide-react";
import { AiOutlineFileExcel } from "react-icons/ai";
// import Link from "next/link";

interface Iuse {
  medicine_name: string;
  category: string;
  manufacturer: string;
  unit_price: string | number;
  opening_stock: string | number;
  reorder_level: string | number;
  expiry_date: string | number;
  description: string;
}

const Pharmacy = () => {
  const [TotalMedicine, setTotalMedicine] = useState<number | string>(0);
  const [Instock, setInstock] = useState<number | string>(0);
  const [Lowstock, setLowstock] = useState<number | string>(0);
  const [OutofStock, setOutofStock] = useState<number | string>(0);
  const [showModal, setShowModal] = useState(false);

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
    setTotalMedicine(
      usercount?.find(
        (item: { title: string; count: number }) =>
          item.title == "Total Medicine",
      )?.total ?? 0,
    );
    setInstock(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Instock",
      )?.total ?? 0,
    );
    setLowstock(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Low Stock",
      )?.total ?? 0,
    );
    setOutofStock(
      usercount?.find(
        (item: { title: string; count: number }) =>
          item.title == "Out of Stock",
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
        TotalMedicine={TotalMedicine}
        Instock={Instock}
        Lowstock={Lowstock}
        OutofStock={OutofStock}
      />

      <div
        className="inline-flex relative left-[90%] w-38 items-center gap-2 px-4 py-2 bg-[#14967f] text-white border border-[#14967f]
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

      {/* modal code Start from here */}
      <Modal
        showModal={showModal}
        className="w-[60rem] rounded-2xl overflow-hidden shadow-2xl mt-8"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14967f] to-[#12b886] px-6 py-4 flex justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold tracking-wide">
              Upload Medicine
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Fill in the details to add a new medicine
            </p>
          </div>
          <div>
            <X
              className="text-white cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>

        {/* Form */}
        <form className="bg-white p-4 grid grid-cols-2 gap-x-6 gap-y-3">
          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Medicine Name</Label>
            <Input
              type="text"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Category</Label>
            <select className="w-full h-9 border border-gray-300 rounded-lg px-3 text-sm text-gray-500 bg-white">
              <option value="">Category</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Manufacturer</Label>
            <Input
              type="text"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Unit Price</Label>
            <div className="flex w-full">
              <span className="h-9 flex items-center px-3 bg-gray-100 border-gray-300 rounded-l-lg text-sm text-gray-600">
                RS
              </span>

              <Input
                type="number"
                min="1"
                className="h-9 border-gray-300 text-sm px-3 w-full"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Opening Stock</Label>
            <Input
              type="number"
              min="1"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Reorder Level</Label>
            <Input
              type="number"
              min="1"
              className="h-9 border-gray-300 rounded-lg px-3 text-sm"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Expiry Date</Label>
            {/* <Controller
              name="expiry"
              control={control}
              render={({ field }) => (
                <CustomDatePicker
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.expiry?.message}
                />
              )}
            /> */}
          </div>
          <div>{/* other input area */}</div>

          <div className="flex flex-col space-y-1">
            <Label className="text-sm text-gray-700">Description</Label>
            <textarea
              placeholder="Description"
              className="w-230 h-16 border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        </form>

        <div className="flex justify-end gap-2 bg-white px-4 pb-4">
          <button
            type="submit"
            className="px-4 py-1.5 rounded-lg bg-[#14967f] text-white text-sm font-medium hover:bg-[#12856f] shadow-md transition"
          >
            Add Medicine
          </button>

          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="px-4 py-1.5 rounded-lg border border-gray-300 text-gray-600 text-sm hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </Modal>

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
export default Pharmacy;
