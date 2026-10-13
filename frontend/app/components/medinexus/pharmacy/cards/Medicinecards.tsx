import { BiSolidCapsule } from "react-icons/bi";
import { LuPackageCheck } from "react-icons/lu";
import { LuPackageMinus } from "react-icons/lu";
import { LuPackageX } from "react-icons/lu";

const Medicinecards = ({TotalMedicine,Instock,Lowstock,OutofStock}:{TotalMedicine:number | string,Instock:number | string,Lowstock:number | string,OutofStock:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Total Medicine</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalMedicine}</span>
        </div>
        <div className=" h-14 w-14">
          <BiSolidCapsule className="text-[#14967f] text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Instock</span>
          <span className="font-bold text-xl text-[#14967f] ">{Instock}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageCheck className="text-blue-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">


        <div className="flex flex-col">
          <span className="font-semibold text-bs">Low Stock</span>
          <span className="font-bold text-xl text-[#14967f] ">{Lowstock}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageMinus className="text-yellow-500 text-3xl mt-2" />
        </div>
      </div>


      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
         <div className="flex flex-col">
          <span className="font-semibold text-bs">Out of Stock</span>
          <span className="font-bold text-xl text-[#14967f] ">{OutofStock}</span>
        </div>
        <div className=" h-14 w-14">
          <LuPackageX className="text-red-500 text-3xl mt-2" />
        </div>
      </div>

    </div>
  )
}


export default Medicinecards;