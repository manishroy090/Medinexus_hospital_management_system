"use client";
import { CloudUpload, FlaskConical } from "lucide-react";
import Table from "@/components/medinexus/Table";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
const page = () => {

  const data = [
    {
      report_id: "RPT-1001",
      test_id: "TST-5001",
      patient: "Aarav Sharma",
      testName: "Complete Blood Count",
      referredBy: "Dr. S. Khadka",
      date: "2026-07-01",
      result: "Normal",
      status: "Completed",
    },
    {
      report_id: "RPT-1002",
      test_id: "TST-5002",
      patient: "Sita Gurung",
      testName: "Lipid Profile",
      referredBy: "Dr. R. Thapa",
      date: "2026-07-02",
      result: "High Cholesterol",
      status: "Completed",
    },
    {
      report_id: "RPT-1003",
      test_id: "TST-5003",
      patient: "Bikash Rai",
      testName: "Liver Function Test",
      referredBy: "Dr. N. Basnet",
      date: "2026-07-02",
      result: "Normal",
      status: "Pending",
    },
    {
      report_id: "RPT-1004",
      test_id: "TST-5004",
      patient: "Priya Shrestha",
      testName: "Thyroid Panel (TSH)",
      referredBy: "Dr. S. Khadka",
      date: "2026-07-03",
      result: "Elevated TSH",
      status: "Completed",
    },
    {
      report_id: "RPT-1005",
      test_id: "TST-5005",
      patient: "Anil Magar",
      testName: "Blood Glucose (Fasting)",
      referredBy: "Dr. P. Adhikari",
      date: "2026-07-03",
      result: "Normal",
      status: "Completed",
    },
    {
      report_id: "RPT-1006",
      test_id: "TST-5006",
      patient: "Kritika Tamang",
      testName: "Urine Routine Exam",
      referredBy: "Dr. R. Thapa",
      date: "2026-07-04",
      result: "Normal",
      status: "In Progress",
    },
    {
      report_id: "RPT-1007",
      test_id: "TST-5007",
      patient: "Suresh Karki",
      testName: "Kidney Function Test",
      referredBy: "Dr. N. Basnet",
      date: "2026-07-04",
      result: "Normal",
      status: "Completed",
    },
    {
      report_id: "RPT-1008",
      test_id: "TST-5008",
      patient: "Manisha Poudel",
      testName: "HbA1c",
      referredBy: "Dr. P. Adhikari",
      date: "2026-07-05",
      result: "6.1%",
      status: "Completed",
    },
    {
      report_id: "RPT-1009",
      test_id: "TST-5009",
      patient: "Rajesh Lama",
      testName: "Chest X-Ray",
      referredBy: "Dr. S. Khadka",
      date: "2026-07-05",
      result: "Clear",
      status: "Completed",
    },
    {
      report_id: "RPT-1010",
      test_id: "TST-5010",
      patient: "Sunita Bhandari",
      testName: "Vitamin D",
      referredBy: "Dr. R. Thapa",
      date: "2026-07-06",
      result: "Deficient",
      status: "Pending",
    },
    {
      report_id: "RPT-1011",
      test_id: "TST-5011",
      patient: "Dipesh Adhikari",
      testName: "ECG",
      referredBy: "Dr. N. Basnet",
      date: "2026-07-06",
      result: "Normal Sinus Rhythm",
      status: "Completed",
    },
    {
      report_id: "RPT-1012",
      test_id: "TST-5012",
      patient: "Nisha Rana",
      testName: "Malaria Antigen Test",
      referredBy: "Dr. P. Adhikari",
      date: "2026-07-07",
      result: "Negative",
      status: "Completed",
    },
    {
      report_id: "RPT-1013",
      test_id: "TST-5013",
      patient: "Prakash Basnet",
      testName: "COVID-19 RT-PCR",
      referredBy: "Dr. S. Khadka",
      date: "2026-07-07",
      result: "Negative",
      status: "Completed",
    },
    {
      report_id: "RPT-1014",
      test_id: "TST-5014",
      patient: "Ranjita Thapa",
      testName: "Iron Studies",
      referredBy: "Dr. R. Thapa",
      date: "2026-07-08",
      result: "Low Ferritin",
      status: "In Progress",
    },
    {
      report_id: "RPT-1015",
      test_id: "TST-5015",
      patient: "Sandeep Khadka",
      testName: "Uric Acid Test",
      referredBy: "Dr. N. Basnet",
      date: "2026-07-08",
      result: "Elevated",
      status: "Completed",
    },
    {
      report_id: "RPT-1016",
      test_id: "TST-5016",
      patient: "Alina Maharjan",
      testName: "Pregnancy Test (Beta hCG)",
      referredBy: "Dr. P. Adhikari",
      date: "2026-07-09",
      result: "Positive",
      status: "Completed",
    },
    {
      report_id: "RPT-1017",
      test_id: "TST-5017",
      patient: "Bishal Bogati",
      testName: "Stool Routine Exam",
      referredBy: "Dr. S. Khadka",
      date: "2026-07-09",
      result: "Normal",
      status: "Pending",
    },
    {
      report_id: "RPT-1018",
      test_id: "TST-5018",
      patient: "Roshani Dahal",
      testName: "Hepatitis B Surface Antigen",
      referredBy: "Dr. R. Thapa",
      date: "2026-07-10",
      result: "Non-Reactive",
      status: "Completed",
    },
    {
      report_id: "RPT-1019",
      test_id: "TST-5019",
      patient: "Kiran Bhattarai",
      testName: "CRP (C-Reactive Protein)",
      referredBy: "Dr. N. Basnet",
      date: "2026-07-10",
      result: "Slightly Elevated",
      status: "Completed",
    },
    {
      report_id: "RPT-1020",
      test_id: "TST-5020",
      patient: "Sabina Nepal",
      testName: "MRI Brain",
      referredBy: "Dr. P. Adhikari",
      date: "2026-07-11",
      result: "No Abnormality Detected",
      status: "In Progress",
    },
  ];

  const [labReport, setlabReport] = useState(data);




  return (
    <div className="flex flex-col space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <h1>Lab & Diagnostic Reports</h1>
          <span className="bg-yellow-100 p-2">Total Reports : 186</span>
        </div>

        <div className="flex space-x-8">
          <Link href={"/laboratory"}>
            <div className="bg-[#14967f]  p-2 text-white rounded flex space-x-2">
              <FlaskConical /> <span>Lab Tests</span>
            </div>
          </Link>

          <Link href={"upload_reports"}>
            <div className="bg-[#14967f]  rounded p-2 text-white flex space-x-2">
              <CloudUpload /> <span>Upload Report</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col space-y-4 justify-between">
        <span className="font-semibold text-xl">Reports List</span>

        <Table
          columns={[
            { title: "report_id" },
            { title: "test_id" },
            { title: "Patient" },
            { title: "Test Name" },
            { title: "Referred By" },
            { title: "Date" },
            { title: "Result" },
            { title: "Status" },
            { title: " " },
          ]}
          data={labReport}
        />
      </div>
    </div>
  );
};

export default page;
