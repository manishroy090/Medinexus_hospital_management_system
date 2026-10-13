import { FaClipboardList } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import { BsFillClipboardCheckFill } from "react-icons/bs";
const Stockadjust = ({TotalPrescription,PendingPrescription,CompletedPrescription,TodayPrescription}:{TotalStockValue:number | string,TotalSkus:number | string,Lowstock:number | string,OutofStock:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Total Prescriptions</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalPrescription}</span>
        </div>
        <div className=" h-14 w-14">
          <FaClipboardList className="text-green-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Pending Prescriptions</span>
          <span className="font-bold text-xl text-[#14967f] ">{PendingPrescription}</span>
        </div>
        <div className=" h-14 w-14">
          <FaClockRotateLeft className="text-blue-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Completed Prescriptions</span>
          <span className="font-bold text-xl text-[#14967f] ">{CompletedPrescription}</span>
        </div>
        <div className=" h-14 w-14">
          <LuClipboardCheck className="text-yellow-500 text-3xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Today's Prescriptions</span>
          <span className="font-bold text-xl text-[#14967f] ">{TodayPrescription}</span>
        </div>
        <div className=" h-14 w-14">
          <BsFillClipboardCheckFill className="text-red-500 text-3xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default Stockadjust;