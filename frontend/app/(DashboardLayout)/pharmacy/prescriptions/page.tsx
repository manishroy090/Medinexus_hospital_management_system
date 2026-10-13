"use client";
import { useState, useEffect, useCallback } from "react";
import { Label } from "@/components/medinexus/label";
import { Input } from "@/components/medinexus/input";
import Table from "@/components/medinexus/Table";
import Modal from "@/components/medinexus/Modal";
import Userscards from "@/components/medinexus/pharmacy/cards/prescription";
import SortBy from "@/components/medinexus/SortBy";
import { getTotalUseraccoringToType } from "@/services/Sum";
import { excelExport } from "@/services/User";
import { Ifilter } from "@/interface/IFilter";
import Exportbtn from "@components/medinexus/Exportbtn";
import { X } from "lucide-react";

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

const prescription = () => {
  const [TotalPrescription, setTotalPrescription] = useState<number | string>(0);
  const [PendingPrescription, setPendingPrescription] = useState<number | string>(0);
  const [CompletedPrescription, setCompletedPrescription] = useState<number | string>(0);
  const [TodayPrescription, setTodayPrescription] = useState<number | string>(0);
  const [showModal, setShowModal] = useState(false);
  const [query, setquery] = useState<Ifilter>({
    search: null,
    filters: null,
    dateRange: { key: null, from: null, to: null },
    sort: { key: null, order: null },
  });

  //toggel modal code
  function openUserModal() {
    setShowModal(true);
  }

  useEffect(() => {
    const { data: usercount } = getTotalUseraccoringToType();
    setTotalPrescription(
      usercount?.find(
        (item: { title: string; count: number }) =>
          item.title == "Total Prescriptions",
      )?.total ?? 0,
    );
    setPendingPrescription(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Pending Prescriptions",
      )?.total ?? 0,
    );
    setCompletedPrescription(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Completed Prescriptions",
      )?.total ?? 0,
    );
    setTodayPrescription(
      usercount?.find(
        (item: { title: string; count: number }) => item.title == "Today's Prescriptions",
      )?.total ?? 0,
    );
  });

  const handleShorting = useCallback((value: string) => {
    setquery((filterValue) => ({
      ...filterValue,
      sort: { key: "id", order: value },
    }));
  }, []);

  const handleExport = async () => {
    const blob = await excelExport();
    return blob;
  };


  const data = [
    {
    prescriptionId: "RX-2026-001",
    dateIssued: "2026-10-01",
    hospitalId: "HSP-001",
    hospitalName: "Everest General Hospital",
    prescriberName: "Dr. Aarav Sharma",
    prescriptionLicense: "NMC-45821",
    patientId: "PAT-1001",
    patientName: "Sita Thapa",
    patientDOB: "1998-04-15",
    patientSex: "Female",
    diagnosisNote: "Acute bacterial infection",
    strength: "500 mg",
    dosageForm: "Tablet",
    directions: "Take 1 tablet twice daily after meals",
    quantity: 14,
    daysSupply: 7,
    refills: 0,
    pharmacyId: "PHR-001",
    pharmacyName: "Everest Hospital Pharmacy",
    status: "Dispensed",
    notes: "Complete the full course",
  },
  {
    prescriptionId: "RX-2026-002",
    dateIssued: "2026-10-02",
    hospitalId: "HSP-002",
    hospitalName: "Kathmandu City Hospital",
    prescriberName: "Dr. Nisha Karki",
    prescriptionLicense: "NMC-36214",
    patientId: "PAT-1002",
    patientName: "Bibek Joshi",
    patientDOB: "1985-08-22",
    patientSex: "Male",
    diagnosisNote: "Fever and headache",
    strength: "500 mg",
    dosageForm: "Tablet",
    directions: "Take as directed by the physician",
    quantity: 10,
    daysSupply: 5,
    refills: 0,
    pharmacyId: "PHR-002",
    pharmacyName: "City Care Pharmacy",
    status: "Pending",
    notes: "Awaiting pharmacy verification",
  },
  {
    prescriptionId: "RX-2026-003",
    dateIssued: "2026-10-03",
    hospitalId: "HSP-001",
    hospitalName: "Everest General Hospital",
    prescriberName: "Dr. Rohan Adhikari",
    prescriptionLicense: "NMC-52763",
    patientId: "PAT-1003",
    patientName: "Anisha Gurung",
    patientDOB: "2002-11-09",
    patientSex: "Female",
    diagnosisNote: "Seasonal allergic rhinitis",
    strength: "10 mg",
    dosageForm: "Tablet",
    directions: "Take 1 tablet once daily as prescribed",
    quantity: 10,
    daysSupply: 10,
    refills: 1,
    pharmacyId: "PHR-003",
    pharmacyName: "Green Cross Pharmacy",
    status: "Dispensed",
    notes: "Monitor symptom improvement",
  },
  {
    prescriptionId: "RX-2026-004",
    dateIssued: "2026-10-04",
    hospitalId: "HSP-003",
    hospitalName: "Patan Community Hospital",
    prescriberName: "Dr. Suman Bista",
    prescriptionLicense: "NMC-41892",
    patientId: "PAT-1004",
    patientName: "Rajesh Maharjan",
    patientDOB: "1976-02-18",
    patientSex: "Male",
    diagnosisNote: "Hypertension follow-up",
    strength: "5 mg",
    dosageForm: "Tablet",
    directions: "Take once daily as prescribed",
    quantity: 30,
    daysSupply: 30,
    refills: 2,
    pharmacyId: "PHR-004",
    pharmacyName: "Patan Medical Pharmacy",
    status: "Active",
    notes: "Routine blood pressure monitoring",
  },
  {
    prescriptionId: "RX-2026-005",
    dateIssued: "2026-10-05",
    hospitalId: "HSP-002",
    hospitalName: "Kathmandu City Hospital",
    prescriberName: "Dr. Priya Shrestha",
    prescriptionLicense: "NMC-29476",
    patientId: "PAT-1005",
    patientName: "Nabin Tamang",
    patientDOB: "1993-06-30",
    patientSex: "Male",
    diagnosisNote: "Gastric discomfort",
    strength: "20 mg",
    dosageForm: "Capsule",
    directions: "Take as prescribed before meals",
    quantity: 14,
    daysSupply: 14,
    refills: 0,
    pharmacyId: "PHR-002",
    pharmacyName: "City Care Pharmacy",
    status: "Dispensed",
    notes: "Follow dietary advice",
  },
  {
    prescriptionId: "RX-2026-006",
    dateIssued: "2026-10-06",
    hospitalId: "HSP-004",
    hospitalName: "Bhaktapur Health Center",
    prescriberName: "Dr. Kiran Poudel",
    prescriptionLicense: "NMC-61385",
    patientId: "PAT-1006",
    patientName: "Mina Rai",
    patientDOB: "1968-12-12",
    patientSex: "Female",
    diagnosisNote: "Type 2 diabetes follow-up",
    strength: "500 mg",
    dosageForm: "Tablet",
    directions: "Take according to the prescribed schedule",
    quantity: 60,
    daysSupply: 30,
    refills: 1,
    pharmacyId: "PHR-005",
    pharmacyName: "Bhaktapur Care Pharmacy",
    status: "Active",
    notes: "Routine glucose monitoring",
  },
  {
    prescriptionId: "RX-2026-007",
    dateIssued: "2026-10-07",
    hospitalId: "HSP-003",
    hospitalName: "Patan Community Hospital",
    prescriberName: "Dr. Suman Bista",
    prescriptionLicense: "NMC-41892",
    patientId: "PAT-1007",
    patientName: "Prakash Lama",
    patientDOB: "1990-03-25",
    patientSex: "Male",
    diagnosisNote: "Vitamin deficiency",
    strength: "1000 IU",
    dosageForm: "Capsule",
    directions: "Take as directed by the physician",
    quantity: 30,
    daysSupply: 30,
    refills: 0,
    pharmacyId: "PHR-004",
    pharmacyName: "Patan Medical Pharmacy",
    status: "Cancelled",
    notes: "Cancelled before dispensing",
  },
  {
    prescriptionId: "RX-2026-008",
    dateIssued: "2026-10-08",
    hospitalId: "HSP-005",
    hospitalName: "Lalitpur Specialty Hospital",
    prescriberName: "Dr. Samiksha KC",
    prescriptionLicense: "NMC-58317",
    patientId: "PAT-1008",
    patientName: "Ritika Basnet",
    patientDOB: "2000-07-14",
    patientSex: "Female",
    diagnosisNote: "Dry cough",
    strength: "100 mg/5 mL",
    dosageForm: "Syrup",
    directions: "Use only as prescribed",
    quantity: 100,
    daysSupply: 5,
    refills: 0,
    pharmacyId: "PHR-006",
    pharmacyName: "Lalitpur Hospital Pharmacy",
    status: "Pending",
    notes: "Pending pharmacist review",
  },
  {
    prescriptionId: "RX-2026-009",
    dateIssued: "2026-10-09",
    hospitalId: "HSP-004",
    hospitalName: "Bhaktapur Health Center",
    prescriberName: "Dr. Kiran Poudel",
    prescriptionLicense: "NMC-61385",
    patientId: "PAT-1009",
    patientName: "Suresh Khatri",
    patientDOB: "1988-09-05",
    patientSex: "Male",
    diagnosisNote: "Muscle pain",
    strength: "200 mg",
    dosageForm: "Tablet",
    directions: "Take according to physician instructions",
    quantity: 10,
    daysSupply: 5,
    refills: 0,
    pharmacyId: "PHR-005",
    pharmacyName: "Bhaktapur Care Pharmacy",
    status: "Expired",
    notes: "Prescription validity expired",
  },
  {
    prescriptionId: "RX-2026-010",
    dateIssued: "2026-10-10",
    hospitalId: "HSP-005",
    hospitalName: "Lalitpur Specialty Hospital",
    prescriberName: "Dr. Samiksha KC",
    prescriptionLicense: "NMC-58317",
    patientId: "PAT-1010",
    patientName: "Puja Khadka",
    patientDOB: "1995-01-27",
    patientSex: "Female",
    diagnosisNote: "Follow-up consultation",
    strength: "25 mg",
    dosageForm: "Tablet",
    directions: "Take as directed by the physician",
    quantity: 15,
    daysSupply: 15,
    refills: 1,
    pharmacyId: "PHR-006",
    pharmacyName: "Lalitpur Hospital Pharmacy",
    status: "Active",
    notes: "Follow-up appointment recommended",
  },
  ];

  const [prescriptionData, setPrescriptionData] = useState<[]>(data);

  return (
    <>
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <h1>Prescription</h1>
          <Exportbtn handleExport={handleExport} />
        </div>

        <Userscards
          TotalPrescription={TotalPrescription}
          PendingPrescription={PendingPrescription}
          CompletedPrescription={CompletedPrescription}
          TodayPrescription={TodayPrescription}
        />

        <div className="flex justify-between">
          <SortBy handleShorting={handleShorting} />

          <div
            className="inline-flex w-45 items-center gap-2 px-4 py-2 bg-[#14967f] text-white border border-[#14967f]
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
            <span className="max-w-50 text-sm font-medium leading-none content-fit">
              Add Prescriptions
            </span>
          </div>
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
                Upload Prescription
              </h2>
              <p className="text-white/80 text-sm mt-1">
                Fill in the details to add a new prescription
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
              <Label className="text-sm text-gray-700">Prescription Name</Label>
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
              Add Prescription
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
          data={prescriptionData}
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
            { title: "Prescription ID" },
            { title: "Date Issued" },
            { title: "Hospital ID" },
            { title: "Hospital Name" },
            { title: "Prescriber Name" },
            { title: "Prescription License" },
            { title: "Patient ID" },
            { title: "Patient Name" },
            { title: "Patient DOB" },
            { title: "Patient Sex" },
            { title: "Diagnosis Note" },
            { title: "Strength" },
            { title: "Dosage Form" },
            { title: "Directions" },
            { title: "Quantity" },
            { title: "Days Supply" },
            { title: "Refills" },
            { title: "Pharmacy ID" },
            { title: "Pharmacy Name" },
            { title: "Status" },
            { title: "Notes" },

          ]}
        />
      </div>
    </>
  );
};
export default prescription;
