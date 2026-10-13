"use client";
import Table from "@/components/medinexus/Table";
import { useEffect, useState } from "react";
import Link from "next/link";

const Laboratory = () => {
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
      <div className="flex justify-between ">
        <div className="bg-[#14967f] relative h-32 w-82 flex items-center space-x-2 text-white justify-between rounded-bl-[40px] rounded-tr-[50px] px-2">
          <div className="flex flex-col ">
            <span className="font-semibold text-nowrap text-black text-yellow-200 font-semibold text-base ">
              Pending Collection
            </span>
            <span className="text-xl font-semibold text-white italic">200</span>
          </div>
          <img
            src={"/laboratory_icons/18357116.png"}
            className="h-18 mr-18 opacity-40 absolute right-9"
          />
          <div className=" rounded-md">
            <img src={"/laboratory_icons/reaction.png"} className="h-14 w-15" />
          </div>
        </div>

        <div className="bg-[#14967f] relative h-32 w-82 flex items-center space-x-2 text-white justify-between rounded-bl-[40px] rounded-tr-[50px] px-2">
          <div className="flex flex-col ">
            <span className="font-semibold text-nowrap text-black text-yellow-200 fontsemibold text-base">
              In Progress
            </span>
            <span className="text-xl font-semibold text-white italic">200</span>
          </div>
          <img
            src={"/laboratory_icons/18357116.png"}
            className="h-18 mr-18 opacity-40 absolute right-9"
          />

          <div className=" rounded-md">
            <img
              src={"/laboratory_icons/microscope (1).png"}
              className="h-14 w-15"
            />
          </div>
        </div>

        <div className="bg-[#14967f] relative h-32 w-82 flex items-center space-x-2 text-white justify-between rounded-bl-[40px] rounded-tr-[50px] px-2">
          <div className="flex flex-col ">
            <span className="font-semibold text-nowrap text-black text-yellow-200 fontsemibold text-base">
              Completed Today
            </span>
            <span className="text-xl font-semibold text-white italic">200</span>
          </div>
          <img
            src={"/laboratory_icons/18357116.png"}
            className="h-18 mr-18 opacity-40 opacity-40 absolute right-9"
          />

          <div className="rounded-md">
            <img
              src={"/laboratory_icons/monitoring.png"}
              className="h-14 w-15"
            />
          </div>
        </div>

        <div className="bg-[#14967f] relative h-32 w-82 flex items-center space-x-2 text-white justify-between rounded-bl-[40px] rounded-tr-[50px] px-2">
          <div className="flex flex-col ">
            <span className="font-semibold text-nowrap text-yellow-200 text-white fontsemibold text-base">
              Critical Results
            </span>
            <span className="text-xl font-semibold text-white italic">200</span>
          </div>
          <img
            src={"/laboratory_icons/18357116.png"}
            className="h-18 mr-18 opacity-40 opacity-40 absolute right-9"
          />

          <div className="rounded-md">
            <img src={"/laboratory_icons/9356599.png"} className="h-14 w-12" />
          </div>
        </div>
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
