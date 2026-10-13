import { CiWallet } from "react-icons/ci";
import { BsBoxes } from "react-icons/bs";
import { LuPackageMinus } from "react-icons/lu";
import { LuPackageX } from "react-icons/lu";
const Stockadjust = ({TotalStockValue,TotalSkus,Lowstock,OutofStock}:{TotalStockValue:number | string,TotalSkus:number | string,Lowstock:number | string,OutofStock:number | string}) => {

  return (

    <div className="grid grid-cols-4 gap-4">

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Total Stock Value</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalStockValue}</span>
        </div>
        <div className=" h-14 w-14">
          <CiWallet className="text-green-500 text-3xl mt-2" />
        </div>
      </div>

      <div className=" rounded-md p-8 shadow bg-white flex  justify-between ">
        <div className="flex flex-col">
          <span className="font-semibold text-bs">Total Skus</span>
          <span className="font-bold text-xl text-[#14967f] ">{TotalSkus}</span>
        </div>
        <div className=" h-14 w-14">
          <BsBoxes className="text-blue-500 text-3xl mt-2" />
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


export default Stockadjust;