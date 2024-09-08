import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoQuestion } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchtext, setUser } from "../../redux/appslice";
import { AnimatePresence } from "framer-motion";
import {motion} from "framer-motion"
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
const Navbar = () => {
  
  const signouthandler=()=>{
    signOut(auth).then(()=>{
      dispatch(setUser(null));
    }).catch((err)=>{
      console.log(err);
    })
  }
  const [toggle,settoggle]=useState(false)
  const [input, setinput] = useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    
    dispatch(setSearchtext(input));
    /* eslint-disable*/
  },[input])
  const {user}=useSelector(store=>store.appslice);
  return (
    <div className="flex items-center justify-between mx-8 h-16">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"25px"} />
          </div>
          <img
            src="https://w7.pngwing.com/pngs/758/665/png-transparent-new-logo-gmail-google-new-logos-icon-thumbnail.png"
            alt=""
            className="w-8"
          />
          <h1 className="text-2xl text-gray-600 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className=" flex px-3 py-3 items-center rounded-full bg-[#EAF1FB]">
          <div>
            <IoIosSearch size={"24px"} className="text-gray-700" />
          </div>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            className="bg-transparent rounded-full text-black w-full outline-none px-2"
          />
        </div>
      </div>
      <div className="md:block hidden ">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-transparent cursor-pointer outline-none px-1">
            <GoQuestion size={"25px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-transparent cursor-pointer outline-none px-1">
            <AiFillSetting size={"25px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-transparent cursor-pointer outline-none px-1">
            <PiDotsNineBold size={"25px"} />
          </div>
          <div className="cursor-pointer relative">
            <Avatar
              src={user.photourl}
              size="25px"
              className="rounded-full"
              onClick={() => settoggle(!toggle)}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                  <p className="p-2 underline" onClick={signouthandler}>
                    Logout
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
