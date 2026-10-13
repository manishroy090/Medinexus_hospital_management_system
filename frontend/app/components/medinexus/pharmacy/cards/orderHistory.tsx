import { FaShoppingCart } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { LuPackageOpen } from "react-icons/lu";
import { TiCancel } from "react-icons/ti";

const MedicineOrderHistory = ({OrderToday,Dispersed,AwaitingPickup,Canceled}:{OrderToday:number | string,Dispersed:number | string,AwaitingPickup:number | string,Canceled:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Order Today</span>
          <span className="font-bold text-xl text-[#14967f] ">{OrderToday}</span>
        </div>
        <div className=" h-14 w-14">
          <FaShoppingCart className="text-green-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Dispersed</span>
          <span className="font-bold text-xl text-[#14967f] ">{Dispersed}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageCheck className="text-blue-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Awaiting Pickup</span>
          <span className="font-bold text-xl text-[#14967f] ">{AwaitingPickup}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageOpen className="text-yellow-500 text-3xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Canceled</span>
          <span className="font-bold text-xl text-[#14967f] ">{Canceled}</span>
        </div>
        <div className=" h-14 w-14">
          <TiCancel className="text-red-500 text-3xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default MedicineOrderHistory;