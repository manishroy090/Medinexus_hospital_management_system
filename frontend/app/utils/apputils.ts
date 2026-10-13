"use client"

import useToaster from "@/hooks/useToaster"


export const toaster = async (message:string,type:string)=>{

    const toaster = useToaster();

     switch (type) {
        case "warning":
            toaster.warning(message)
            break;
        case "success":
           toaster.success(message)

        case "danger":
            toaster.danger(message)

        default:
            break;
     }

}