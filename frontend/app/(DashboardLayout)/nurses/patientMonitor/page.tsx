"use client";
import Card from "@/components/medinexus/nurses/cards/Cards";
import { useEffect, useState } from "react";
import Table from "@/components/medinexus/Table";
import { PatientCards } from "@/data/nurses/patientMonitor";

export default function page() {
  const [PatientCardsState, setPatientCardsState] = useState(PatientCards);
  const [MonitorPatient, setMonitorPatient] = useState<[]>([]);

  useEffect(() => {
    const PatientMonitor = [
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

    setMonitorPatient(PatientMonitor);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {PatientCardsState.map((item, index) => (
          <Card
            key={index}
            label={item.label}
            total={item.total}
            icon={item.icon}
          />
        ))}
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
          data={MonitorPatient}
        />
      </div>
    </>
  );
}
