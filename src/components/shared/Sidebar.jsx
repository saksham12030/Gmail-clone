
// import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { LuPenLine } from "react-icons/lu"
import { MdInbox, MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setopen } from "../../redux/appslice";

// import 
const Sidebar = () => {
    const sidebaricons = [
      {
        icon: <MdInbox size={"20px"} />,
        text: "Inbox",
      },
      {
        icon: <IoMdStar size={"20px"} />,
        text: "Starred",
      },
      {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: "Snoozed",
      },
      {
        icon: <TbSend2 size={"20px"} />,
        text: "Sent",
      },
      {
        icon: <MdOutlineDrafts size={"20px"} />,
        text: "Draft",
      },
      {
        icon: <MdOutlineKeyboardArrowDown size={"20px"} />,
        text: "More",
      },
    ];
    // const [open,setOpen]=useState(false);
    const dispatch=useDispatch();
    return (
    <div className="w-[15%] ">
      <div className="px-2">
        <button
          type="submit" 
          onClick={()=>dispatch(setopen(true))}
          className="bg-[#C3E8FF] border-1 flex gap-2 rounded-2xl px-5 py-3 items-center justify-start"
        >
          <LuPenLine size={"20px"} />
          <div className="font-semibold text-md">Compose</div>
        </button>
      </div>
      <div className="text-gray-600 mt-5">
        {
            sidebaricons.map((item,index)=>{
                return (
                  <div
                    className="rounded-r-full items-center py-1 flex gap-4 pl-6 hover:bg-gray-300 hover:cursor-pointer my-2"
                    key={index}
                  >
                    {item.icon}
                    <p>{item.text}</p>
                  </div>
                );
            })
        }
        
      </div>
    </div>
  );
}

export default Sidebar
