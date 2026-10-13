import { LuPackageCheck } from "react-icons/lu";
import { LiaTruckSolid } from "react-icons/lia";
import { LuPackageOpen } from "react-icons/lu";
import { MdLocationCity } from "react-icons/md";

const MedicineTransferOrder = ({PendingTransfer,InTransit,AwaitingPickup,locations}:{PendingTransfer:number | string,InTransit:number | string,AwaitingPickup:number | string,locations:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Pending Transfer</span>
          <span className="font-bold text-xl text-[#14967f] ">{PendingTransfer}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageCheck className="text-yellow-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">In Transit</span>
          <span className="font-bold text-xl text-[#14967f] ">{InTransit}</span>
        </div>
        <div className=" h-14 w-14">
          <LiaTruckSolid className="text-blue-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Awaiting Pickup</span>
          <span className="font-bold text-xl text-[#14967f] ">{AwaitingPickup}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageOpen className="text-green-500 text-3xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Locations</span>
          <span className="font-bold text-xl text-[#14967f] ">{locations}</span>
        </div>
        <div className=" h-14 w-14">
          <MdLocationCity className="text-purple-500 text-3xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default MedicineTransferOrder;