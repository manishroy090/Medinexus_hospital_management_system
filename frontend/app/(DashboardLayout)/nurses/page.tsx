"use client";
import Card from "@/components/medinexus/pharmacy/cards/Card";
import { useEffect, useState } from "react";
import {
  cards,
  medicationSchedule,
  lowStockMedicines,
} from "@/data/dashboard/nursessdashboard";
import { PieChart } from "@/components/medinexus/charts/piecharts/PieChart";
import { LineChart } from "@/components/medinexus/charts/piecharts/LineChart";
import Table from "@/components/medinexus/Table";
import { Van } from "lucide-react";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export default function page() {
  const [cardlist, setCards] = useState(cards);
  const [medicationScheduledata, SetexpiryAlerts] =
    useState(medicationSchedule);
  const [lowstockmedicinesdata, setLowStockMedicines] =
    useState(lowStockMedicines);

  return (
    <>
      <div className="flex flex-col space-y-8">
        <h1>Nurses Dashboard</h1>

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

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white h-fitflex flex-col justify-center items-center">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              Vitals Trend (Today)
            </h1>

            <div className=" p-2 ">
              <LineChart />;
            </div>
          </div>

          <div className="bg-white h-fitflex flex-col justify-center items-center">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              Ward Occupancy
            </h1>

            <div className=" p-2 ">
              <PieChart labels={["ICU", "General Ward", "Pediatric"]} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-8">
          <div className="bg-white h-fitflex flex-col justify-center items-center col-span-4">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              Live Patient Vitals
            </h1>
            <div className="">
              <Table
                data={[]}
                showaction={true}
                columns={[
                  { title: "Patient" },
                  { title: "Bed" },
                  { title: "Heart Rate" },
                  { title: "Blood Pressure" },
                  { title: "SpO2" },
                  { title: "Status" },
                ]}
              />
            </div>
          </div>

          <div className="bg-white h-fitflex flex-col justify-center items-center col-span-2">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              Medication Schedule
            </h1>

            <div className="expiryAlerts flex flex-col space-y-4">
              {medicationSchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-6  bg-slate-50 shadow"
                >
                  <div>
                    <div className="flex space-x-4">
                      <h1>{item.patient}</h1>
                    </div>

                    <div className="flex space-x-4">
                      <span>{`${item.medication} -  ${item.bed}`}</span>
                    </div>
                  </div>

                  <div className="bg-red-600 p-2 text-white font-semibold rounded-sm">
                    {item.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white h-fitflex flex-col justify-center items-center col-span-3">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              {" "}
              Weekly Ward Activity
            </h1>

            <div className="top-selling">
              <div className="flex flex-col space-y-2  p-3">
                <div className="flex justify-between ">
                  <span>Paracetamol 500Mg</span>
                  <span>312 units</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-fitflex flex-col justify-center items-center col-span-3">
            <h1 className="bg-[#14967f] text-white p-2 w-full">
              {" "}
              Shift Handover Notes
            </h1>

            <div className="suppliers_overview">
              <div className="flex justify-between p-6 w-full bg-yellow-50 border-b border-gray-200">
                <div className="flex space-x-4  w-1/2">
                  <div className="bg-blue-100 p-2 rounded">
                    <Van className="text-blue-600" />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span>MedSupply Co.</span>
                    <span>18 orders this month</span>
                  </div>
                </div>

                <div className="">
                  <span className="bg-yellow-100 p-2 text-yellow-600 rounded">
                    OnTime
                  </span>
                </div>
              </div>

              <div className="flex justify-between p-6 w-full bg-yellow-50 border-b border-gray-200">
                <div className="flex space-x-4  w-1/2">
                  <div className="bg-yellow-100 p-2 rounded">
                    <Van className="text-yellow-600" />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span>MedSupply Co.</span>
                    <span>18 orders this month</span>
                  </div>
                </div>

                <div className="">
                  <span className="bg-blue-100 p-2 text-blue-600 rounded">
                    OnTime
                  </span>
                </div>
              </div>

              <div className="flex justify-between p-6 w-full bg-yellow-50 border-b border-gray-200">
                <div className="flex space-x-4  w-1/2">
                  <div className="bg-green-100 p-2 rounded">
                    <Van className="text-green-600" />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span>MedSupply Co.</span>
                    <span>18 orders this month</span>
                  </div>
                </div>

                <div className="">
                  <span className="bg-green-100 p-2 text-green-600 rounded">
                    OnTime
                  </span>
                </div>
              </div>

              <div className="flex justify-between p-6 w-full bg-yellow-50 border-b border-gray-200">
                <div className="flex space-x-4  w-1/2">
                  <div className="bg-red-100 p-2 rounded">
                    <Van className="text-red-600" />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <span>MedSupply Co.</span>
                    <span>18 orders this month</span>
                  </div>
                </div>

                <div className="">
                  <span className="bg-blue-100 p-2 text-blue-600 rounded">
                    OnTime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
