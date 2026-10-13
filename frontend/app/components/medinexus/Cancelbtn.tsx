import { useRouter } from "next/navigation";

const Cancelbtn = ({label,className,url="/"}:{label:String,className?:String,url?:string}) => {

  const router = useRouter();
  return (
        <button
         onClick={()=>router.push(url)} 
              type="button"
              className="px-4 py-2  rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              {label}
            </button>
  );
};

export default Cancelbtn;

   