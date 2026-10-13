"use client"
import {OctagonAlert} from "lucide-react"

const Succestoaset = ({message}) =>{

    return (
        <div className="flex space-x-4">
            {/* <OctagonAlert color="#FFCC00" /> */}
            <span className="font-semibold">{message}</span>
        </div>
    )

}


export default Succestoaset