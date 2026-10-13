import { FcInTransit } from "react-icons/fc";
import { LuPackageCheck } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";


const MedicinePurchaseOrder = ({PendingApproval,InTransit,DeliveredMonth,TotalSpend}:{PendingApproval:number | string,InTransit:number | string,DeliveredMonth:number | string,TotalSpend:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Pending Approval</span>
          <span className="font-bold text-xl text-[#14967f] ">{PendingApproval}</span>
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
          <FcInTransit className="text-blue-500 text-4xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Delivered this month</span>
          <span className="font-bold text-xl text-[#14967f] ">{DeliveredMonth}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageCheck className="text-green-500 text-3xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Total Spend</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalSpend}</span>
        </div>
        <div className=" h-14 w-14">
          <CiWallet className="text-orange-500 text-3xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default MedicinePurchaseOrder;