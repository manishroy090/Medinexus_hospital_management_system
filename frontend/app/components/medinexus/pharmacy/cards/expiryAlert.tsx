import { FaCalendarTimes } from "react-icons/fa";
import { TbCalendarTime } from "react-icons/tb";
import { ImCalendar } from "react-icons/im";
import { LuChartNoAxesCombined } from "react-icons/lu";

const MedicineExpirecards = ({TotalExpired,ExpiryWeek,ExpiryMonth,ValuesRisk}:{TotalExpired:number | string,ExpiryWeek:number | string,ExpiryMonth:number | string,ValuesRisk:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Expired</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalExpired}</span>
        </div>
        <div className=" h-14 w-14">
          <FaCalendarTimes className="text-red-500 text-2xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Expiring in 7 Days</span>
          <span className="font-bold text-xl text-[#14967f] ">{ExpiryWeek}</span>
        </div>
        <div className=" h-14 w-14">
          <TbCalendarTime className="text-yellow-500 text-2xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Expiry in 30 Days</span>
          <span className="font-bold text-xl text-[#14967f] ">{ExpiryMonth}</span>
        </div>
        <div className=" h-14 w-14">
          <ImCalendar className="text-green-500 text-2xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Value at Risk</span>
          <span className="font-bold text-xl text-[#14967f] ">{ValuesRisk}</span>
        </div>
        <div className=" h-14 w-14">
          <LuChartNoAxesCombined className="text-blue-500 text-2xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default MedicineExpirecards;