"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useEffect, useState } from "react";
import Table from "@/components/medinexus/Table";
import {
  alertCards,
  patientAlert,
  alertHistory,
} from "@/data/nurses/criticalaleret";
import { LineChart } from "@/components/medinexus/charts/piecharts/LineChart";

export default function page() {
  const [alertCard, setalertCard] = useState(alertCards);
  const [patientHistory, setpatientLevel] = useState<[]>([]);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  useEffect(() => {
    const alertHistory = [
      {
        id: 1,
        patient: "Rajib Biswamitra",
        bed: "12S",
        alert: "Low blood glucose",
        raisedAT: "07:20 AM",
        resolvedAT: "07:35 AM",
        status: "Resolved",
      },
      {
        id: 2,
        patient: "Sita Thapa",
        bed: "08A",
        alert: "Temperature spike",
        raisedAT: "07:20 AM",
        resolvedAT: "07:35 AM",
        status: "Resolved",
      },
      {
        id: 3,
        patient: "Bibek Joshi",
        bed: "15B",
        alert: "Missed medication window",
        raisedAT: "07:20 AM",
        resolvedAT: "07:35 AM",
        status: "Resolved",
      },
      {
        id: 4,
        patient: "Anisha Karki",
        bed: "10C",
        alert: "Heart rate irregularity detected",
        raisedAT: "07:20 AM",
        resolvedAT: "07:35 AM",
        status: "Resolved",
      },
    ];

    setpatientLevel(alertHistory);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {alertCard.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            total={item.total}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Last Area */}
      <div className="mt-10 grid grid-cols-3 gap-5">
        {/* first Box */}
        {patientAlert.map((data) => (
          <div
            key={data.id}
            className="border border-red-500 bg-white  rounded-md p-5"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div>
                  <img
                    src="/hrm_image/doctor.png"
                    alt="logo"
                    className="h-15 w-15 rounded-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-5">
                    <span className="text-lg text-gray-800">
                      {data.patient}
                    </span>

                    <span className="text-gray-600">{data.bed}</span>
                  </div>

                  <div>
                    <p className="text-gray-500">{data.issue}</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600 px-2 py-1 rounded-lg font-semibold text-white">
                Critical
              </div>
            </div>

            <div className="text-gray-500 mt-4 ml-3">
              <span className="mr-6">SpO2 {data.SP02}</span>
              <span>{data.lastUpdated}</span>
            </div>

            <div className="flex gap-2 mt-4 ">
              <button className="w-[50%] py-2 rounded-lg border border-red-600 bg-red-600 font-semibold text-white hover:bg-red-700">
                Acknowledge
              </button>

              <button className="w-[50%] py-2 rounded-lg border border-gray-200 bg-white font-semibold text-gray-700 hover:bg-gray-100">
                Add Note
              </button>
            </div>
          </div>
        ))}

        {/* Last Box */}
        <div className="border border-red-500 bg-white rounded-md p-5">
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div>
                <img
                  src="/hrm_image/doctor.png"
                  alt="logo"
                  className="h-15 w-15 rounded-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-5">
                  <span className="text-lg text-gray-800">Alvertto Ripley</span>

                  <span className="text-gray-600">Bed 12A</span>
                </div>

                <div>
                  <p className="text-gray-500">
                    Oxygen Saturation Critically Low
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400 px-2 py-1 rounded-lg font-semibold text-white">
              Acknowledged
            </div>
          </div>

          <div className="text-gray-500 mt-4 ml-3">
            <span className="mr-6">SpO2 89%</span>
            <span>2 min ago</span>
          </div>

          <div className="flex gap-2 mt-4 ">
            <button className="w-[50%] py-2 rounded-lg border border-green-400 bg-green-400 font-semibold text-white hover:bg-green-700">
              Mark Resolved
            </button>

            <button className="w-[50%] py-2 rounded-lg border border-gray-200 bg-white font-semibold text-gray-700 hover:bg-gray-100">
              Add Note
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded px-1 mt-8">
        <Table
          columns={[
            { title: "Patient Name" },
            { title: "Bed" },
            { title: "Alert" },
            { title: "Raised At" },
            { title: "Resolved At" },
            { title: "Status" },
          ]}
          data={patientHistory}
        />
      </div>
    </>
  );
}
