"use client";
import { TextAlignJustify, Calendar, SquareKanban } from "lucide-react";
import Link from "next/link";
import Table from "@/components/medinexus/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import KanbanCard from "@components/medinexus/kanban/KanbanCard";
import { faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  const dropHandler = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  };

  return (
    <div className="flex flex-col space-y-4 w-full   px-8 mt-10 ">
      <div className="flex justify-between bg-white h-[44rem] px-8 py-6 bg-slate-200 space-x-6 shadow rounded realtive">
        <div className="pending bg-gray-100 w-76 flex flex-col h-full ">
          <div className="bg-yellow-200 block text-center py-2 text-gray-400 font-semibold flex space-x-4 justify-center items-center ">
            <span>Pending</span>
            <FontAwesomeIcon
              icon={faClock}
              spin
              style={{ color: "rgb(0, 0, 0)" }}
            />
          </div>
          <div
            onDrop={dropHandler}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col  h-full justify-between pb-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#14967f] scrollbar-track-slate-100"
          >
            <KanbanCard draggable={true} />

            <div className="text-center bg-[#14967f] mt-4 text-white w-52 self-center py-2 absolute bottom-33">
              New Appointment
            </div>
          </div>
        </div>

        <div className="pending bg-gray-100 w-76 flex flex-col h-full realtive">
          <div className="bg-yellow-200 block text-center py-2 text-gray-400 font-semibold flex space-x-4 justify-center items-center ">
            <span>Confirmed</span>
            <FontAwesomeIcon
              icon={faFileCircleCheck}
              shake
              style={{ color: "rgb(81, 223, 34)" }}
            />
          </div>
          <div
            onDrop={dropHandler}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col  h-full justify-between pb-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#14967f] scrollbar-track-slate-100"
          >
            {/* <KanbanCard /> */}

            <div className="text-center bg-[#14967f] mt-4 text-white w-52 self-center py-2 absolute bottom-33">
              New Appointment
            </div>
          </div>
        </div>

          <div className="pending bg-gray-100 w-76 flex flex-col h-full realtive">
          <div className="bg-yellow-200 block text-center py-2 text-gray-400 font-semibold flex space-x-4 justify-center items-center ">
            <span>CheckIn</span>
          <FontAwesomeIcon
              icon={faCompass}
              spin-snap4
              style={{ color: "rgb(172, 54, 185,1)" }}
            />
          </div>
          <div
            onDrop={dropHandler}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col  h-full justify-between pb-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#14967f] scrollbar-track-slate-100"
          >
            {/* <KanbanCard /> */}

            <div className="text-center bg-[#14967f] mt-4 text-white w-52 self-center py-2 absolute bottom-33">
              New Appointment
            </div>
          </div>
        </div>

          <div className="pending bg-gray-100 w-76 flex flex-col h-full realtive">
          <div className="bg-yellow-200 block text-center py-2 text-gray-400 font-semibold flex space-x-4 justify-center items-center ">
            <span>CheckOut</span>
             <FontAwesomeIcon
              icon={faEyeSlash}
              beat
              style={{ color: "rgb(121, 87, 87,1)" }}
            />
          </div>
          <div
            onDrop={dropHandler}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col  h-full justify-between pb-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#14967f] scrollbar-track-slate-100"
          >
            {/* <KanbanCard /> */}

            <div className="text-center bg-[#14967f] mt-4 text-white w-52 self-center py-2 absolute bottom-33">
              New Appointment
            </div>
          </div>
        </div>

          <div className="pending bg-gray-100 w-76 flex flex-col h-full realtive">
          <div className="bg-yellow-200 block text-center py-2 text-gray-400 font-semibold flex space-x-4 justify-center items-center ">
            <span>Cancelled</span>
           <FontAwesomeIcon
              icon={faBan}
              jello
              style={{ color: "rgb(253, 16, 16,1)" }}
            />
          </div>
          <div
            onDrop={dropHandler}
            onDragOver={(e) => e.preventDefault()}
            className="flex flex-col  h-full justify-between pb-6 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#14967f] scrollbar-track-slate-100"
          >
            {/* <KanbanCard /> */}

            <div className="text-center bg-[#14967f] mt-4 text-white w-52 self-center py-2 absolute bottom-33">
              New Appointment
            </div>
          </div>
        </div>

  
      </div>
    </div>
  );
};

export default page;
