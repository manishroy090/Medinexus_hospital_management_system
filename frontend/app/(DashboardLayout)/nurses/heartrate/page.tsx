"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useEffect, useState } from "react";
import Table from "@/components/medinexus/Table";
import { heartrate } from "@/data/nurses/heartrate";
import { LineChart } from "@/components/medinexus/charts/piecharts/LineChart";

export default function page() {
  const [heartrates, setheartrate] = useState(heartrate);
  const [patientHeart, setpaitentheart] = useState<[]>([]);
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
    const patientHeartRates = [
      {
        id: 1,
        patient: "Rajib Biswamitra",
        bed: "12S",
        heartRate: "118bpm",
        lastUpdated: "2min ago",
        status: "Critical",
      },
      {
        id: 2,
        patient: "Sita Thapa",
        bed: "08A",
        heartRate: "96bpm",
        lastUpdated: "4min ago",
        status: "Normal",
      },
      {
        id: 3,
        patient: "Bibek Joshi",
        bed: "15B",
        heartRate: "105bpm",
        lastUpdated: "1min ago",
        status: "Warning",
      },
      {
        id: 4,
        patient: "Anisha Karki",
        bed: "10C",
        heartRate: "82bpm",
        lastUpdated: "3min ago",
        status: "Normal",
      },
    ];

    setpaitentheart(patientHeartRates);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {heartrates.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            total={item.total}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="bg-white h-fit">
        <h1 className="bg-[#14967f] text-white p-2 w-full">
          Ward Average Heart Rate (Last 12 Hours)
        </h1>

        <div className=" p-2">
          <LineChart />
        </div>
      </div>

      <div className="bg-white rounded px-1 mt-8">
        <Table
          columns={[
            { title: "Patient Name" },
            { title: "Bed" },
            { title: "Heart Rate" },
            { title: "Lasted Updated" },
            { title: "Status" },
          ]}
          data={patientHeart}
        />
      </div>
    </>
  );
}
