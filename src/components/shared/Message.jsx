import { MdCropSquare } from "react-icons/md"
import { RiStarLine } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setselectedemail } from "../../redux/appslice";
import {motion} from "framer-motion";
/* eslint-disable */
const Message =({email}) => {
  const maxLength = 100;
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const openmail=()=>{
      dispatch(setselectedemail(email))
        navigate(`/mail/${email.id}`)
    }
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={openmail}
      className="flex items-start justify-between border-b px-4 py-2 border-gray-200 text-sm hover:cursor-pointer hover:shadow-md "
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <h1 className="font-semibold">{email?.to}</h1>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          {email.message.length > maxLength
            ? email?.message.substring(0, 110) + " ..."
            : email?.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        {new Date(email?.createdAt?.seconds * 1000).toUTCString()}
      </div>
    </motion.div>
  );
}

export default Message
