import { EllipsisVertical, MessageCircle, Phone } from "lucide-react";
import { useState, useRef } from "react";

const KanbanCard = ({draggable}:{draggable:boolean}) =>{
    
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<any>(null);

    const ondragStart = (event:any) =>{
      event.dataTransfer.setData("text", event.target.id);
    }
    
    return(
          <div id="check" draggable={draggable} onDragStart={ondragStart} className="flex flex-col space-y-4 px-4 mt-4 text-xs">
              <div className="px-3 bg-white py-2 flex-col space-y-4  rounded">
                <div className="flex justify-between items-center  space-x-3">
                  <div>
                    <span className="bg-[#14967f] p-1 text-white">
                      In-Person
                    </span>
                  </div>
                  <div className="flex  relative" ref={menuRef}>
                    <EllipsisVertical
                      size={18}
                      onClick={() => setOpenMenu(!openMenu)}
                    />
                    {openMenu && (
                      <ul className="absolute right-10 top-4 bg-white shadow p-2 flex flex-col space-y-2">
                        <li>View</li>
                        <li>ReSchedule</li>
                        <li>Cancel</li>
                      </ul>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={"/images/profile/user-4.jpg"}
                  ></img>
                  <span>Manish Ray</span>
                </div>

                <div className="flex flex-col space-y-2 border-b border-[#14967f] pb-2 italic">
                  <div className="flex ">
                    <span className="font-semibold">Doctor : </span>
                    <span> Manish Yadav</span>
                  </div>

                  <div className="flex ">
                    <span className="font-semibold">Date : </span>
                    <span> 2028-03-04</span>
                  </div>
                  <div className="flex ">
                    <span className="font-semibold">Time : </span>
                    <span>10:00AM</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#14967f]">View Details</span>
                  <div className="flex space-x-4">
                    <MessageCircle size={14} color="#14967f" />
                    <Phone size={14} color="#14967f" />
                  </div>
                </div>
              </div>
            </div>
    )
}

export default KanbanCard;