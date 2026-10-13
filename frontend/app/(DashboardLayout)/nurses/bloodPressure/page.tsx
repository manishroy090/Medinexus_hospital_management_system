"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useEffect, useState } from "react";
import Table from "@/components/medinexus/Table";
import { bloodpressure } from "@/data/nurses/bloodpressure";
import { LineChart } from "@/components/medinexus/charts/piecharts/LineChart";

export default function page() {
  const [BP, setBP] = useState(bloodpressure);
  const [patientbloodpressure, setpatientbloodpressure] = useState<[]>([]);
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
    const patientBP = [
      {
        id: 1,
        patient: "Rajib Biswamitra",
        bed: "12S",
        bloodPress: "150/95",
        lastUpdated: "2min ago",
        status: "Critical",
      },
      {
        id: 2,
        patient: "Sita Thapa",
        bed: "08A",
        bloodPress: "135/88",
        lastUpdated: "4min ago",
        status: "Normal",
      },
      {
        id: 3,
        patient: "Bibek Joshi",
        bed: "15B",
        bloodPress: "120/80",
        lastUpdated: "1min ago",
        status: "Warning",
      },
      {
        id: 4,
        patient: "Anisha Karki",
        bed: "10C",
        bloodPress: "118/76",
        lastUpdated: "3min ago",
        status: "Normal",
      },
    ];

    setpatientbloodpressure(patientBP);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {BP.map((item, index) => (
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
          Ward Average Blood Pressure (Last 12 Hours)
        </h1>

        <div className=" p-2">
          <LineChart />
        </div>
      </div>

      <div className="bg-white rounded px-1 mt-8">
        <Table
          columns={[
            { title: " Patient Name" },
            { title: "Bed" },
            { title: "Blood Pressure" },
            { title: "Last Updated" },
            { title: "Status" },
          ]}
          data={patientbloodpressure}
        />
      </div>
    </>
  );
}
