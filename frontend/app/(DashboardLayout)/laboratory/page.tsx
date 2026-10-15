"use client";
import Table from "@/components/medinexus/Table";
import { useEffect, useState } from "react";
import Link from "next/link";
import Card from "@/components/medinexus/laboratory/cards/card";
import { cards } from "@/data/dashboard/laboratorydashboard";
const Laboratory = () => {

  const [cardlist, setCards] = useState(cards);
  
  const data = [
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3201",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3202",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3203",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3204",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3204",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3204",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
    {
      report_id: "#LT-3204",
      Patient: "Alberto Ripley",
      Test_Name: "Complete Blood Count (CBC)",
      Referred_By: "Dr.Michael Smith",
      Date: "27 May 2025",
      Priority: "Urgent",
      Status: "In Progress",
      action: null,
    },
  ];

  const [labReport, setLabReport] = useState<[]>(data);

  return (
    <div className="flex flex-col space-y-8">
      <h1>Laboratory Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          {cardlist.map((item, index) => (
            <Card
              key={index}
              label={item.label}
              total={item.total}
              icons={item.icons}
            />
          ))}
        </div>

      <div className="flex flex-col space-y-10">
        <div className="flex justify-between">
          <span className="font-semibold text-xl">Reports List</span>
        </div>

        <Table
          data={labReport}
          showaction={false}
          columnRenderers={{
            action: (value, row) => {
              return (
                <div className="flex space-x-8">
                  <img
                    src={"/laboratory_icons/flask/chemical-experiment.png"}
                    className="w-8 cursor-pointer"
                  />
                  <img
                    src={"/laboratory_icons/flask/volumetric-flask.png"}
                    className="w-8 cursor-pointer"
                  />
                </div>
              );
            },
          }}
          columns={[
            { title: "report_id" },
            { title: "Patient" },
            { title: "Test Name" },
            { title: "Referred By" },
            { title: "Date" },
            { title: "Priority" },
            { title: "Status" },
            { title: "action" },
          ]}
        />
      </div>
    </div>
  );
};

export default Laboratory;
