
import { ToastContainer, toast } from "react-toastify";
import Warningtoaset from "@components/toaster/Warningtoaster"
import Succestoaset from "@components/toaster/Succestoaset"
import DeleteToaster from "@components/toaster/DeleteToaster"


export default function  useToaster(){

    function success(content:any){
     toast(<Succestoaset message={content}/>);

    }

    function warning(content:any){
       toast(<Warningtoaset message={content}/>);
    }


    function danger(content:any){
      toast(<DeleteToaster message={content}/>);
    }



    return {
        warning,
        success,
        danger
    }
}