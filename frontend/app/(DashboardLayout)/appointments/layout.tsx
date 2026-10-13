"use client";
import { TextAlignJustify, Calendar, SquareKanban } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Select, SelectItem } from "@/components/medinexus/select";
import {CirclePlus} from "lucide-react"
import { X } from "lucide-react";
import Formmodal from "./formmodal/Formmodal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setModal] = useState(false);

  const hideModal = () =>{
    setModal(false);
  }


  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-8">
        <h1>Appointments</h1>

        <div className="flex justify-between items-center space-x-20">
          <div className="bg-yellow-200 p-1 px-2">Export</div>

          <div className="flex space-x-10">
            <Link href={"/appointments/list"}>
              <div className="list bg-white p-2 shadow rounded cursor-pointer">
                <TextAlignJustify size={18} />
              </div>
            </Link>

            <Link href={"/appointments/calendar"}>
              <div className="calendar bg-white p-2 shadow rounded cursor-pointer">
                <Calendar size={18} />
              </div>
            </Link>

            <Link href={"/appointments/kanban"}>
              <div className="kanban bg-white p-2 shadow rounded cursor-pointer">
                <SquareKanban size={18} />
              </div>
            </Link>
          </div>

          <div
            className="bg-[#14967f] p-1 px-2 text-white cursor-pointer"
            onClick={() => setModal(true)}
          >
            New Appointment
          </div>
        </div>
      </div>

     <Formmodal showmainFrom={showModal} hideModal={hideModal}/>

      <div className="w-full ">{children}</div>
    </div>
  );
};

export default Layout;
