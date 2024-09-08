import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {useNavigate, useParams} from "react-router-dom";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import {motion} from "framer-motion"
import { BiArchiveIn } from "react-icons/bi";
import { useSelector } from "react-redux";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
const Mail = () => {
  const {selectedemail}=useSelector((store)=>store.appslice);
  const navigate=useNavigate();
  const params=useParams();
  
  const deleteitem=async(id)=>{
    try {
      await deleteDoc(doc(db,"emails",id));
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <motion.div initial={{opacity:0,y:-20}} 
      animate={{opacity:1,y:0}} 
      transition={{duration:0.5}}
      className="flex-1 bg-white rounded-xl mx-5">
      <div className=" flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdArrowBack size={"20px"} onClick={() => navigate("/")} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={"20px"} />
          </div>
          <div
            onClick={() =>deleteitem(params.id)}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-200">
            <MdKeyboardArrowLeft />
          </button>
          <button className="hover:rounded-full hover:bg-gray-200">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4 ">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedemail.subject}</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>
              {new Date(selectedemail.createdAt.seconds * 1000).toUTCString()}
            </p>
          </div>
        </div>
        <div className="text-gray-500 text-sm">
          <h1>{selectedemail.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>{selectedemail.message}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Mail;
