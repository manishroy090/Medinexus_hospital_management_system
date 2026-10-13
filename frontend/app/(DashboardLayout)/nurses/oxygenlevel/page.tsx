"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useEffect, useState } from "react";
import Table from "@/components/medinexus/Table";
import { oxygencards } from "@/data/nurses/oxygenlevel";
import { LineChart } from "@/components/medinexus/charts/piecharts/LineChart";

export default function page() {
  const [OXCards, setOXCards] = useState(oxygencards);
  const [patientOXLevel, setpatientOXLevel] = useState<[]>([]);
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
    const patientOxygen = [
      {
        id: 1,
        patient: "Rajib Biswamitra",
        bed: "12S",
        SPO2: "89%",
        oxygenSupport: "150/95",
        lastUpdated: "2min ago",
        status: "Critical",
      },
      {
        id: 2,
        patient: "Sita Thapa",
        bed: "08A",
        SPO2: "96%",
        oxygenSupport: "None",
        lastUpdated: "4min ago",
        status: "Normal",
      },
      {
        id: 3,
        patient: "Bibek Joshi",
        bed: "15B",
        SPO2: "93%",
        oxygenSupport: "2 L/min",
        lastUpdated: "1min ago",
        status: "Warning",
      },
      {
        id: 4,
        patient: "Anisha Karki",
        bed: "10C",
        SPO2: "98%",
        oxygenSupport: "None",
        lastUpdated: "3min ago",
        status: "Normal",
      },
    ];

    setpatientOXLevel(patientOxygen);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {OXCards.map((item, index) => (
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
          Ward Average Oxygen Level (Last 12 Hours)
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
            { title: "SP02" },
            { title: "Oxygen Support" },
            { title: "Last Updated" },
            { title: "Status" },
          ]}
          data={patientOXLevel}
        />
      </div>
    </>
  );
}
