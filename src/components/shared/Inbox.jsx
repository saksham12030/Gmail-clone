import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdSearch } from "react-icons/io";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Messages from "./Messages";
import { useSelector } from "react-redux";

const Inbox = () => {
  const mailer = [
    {
      icon: <MdInbox size={"20px"} />,
      text: "Primary",
    },
    {
      icon: <GoTag size={"20px"} />,
      text: "Promotion",
    },
    {
      icon: <FaUserFriends size={"20px"} />,
      text: "Social",
    },
  ];
  const [check, setcheck] = useState(0);
  const { emails } = useSelector((store) => store.appslice);
  return (
    <div className="flex-1 rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center ga-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdSearch size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-600">1-50 of {emails?.length}</p>
          <button className="hover:rounded-full hover:bg-gray-200">
            <MdKeyboardArrowLeft />
          </button>
          <button className="hover:rounded-full hover:bg-gray-200">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailer.map((item, index) => {
            return (
              <button
                className={`${
                  check == index
                    ? "border-b-4 border-b-blue-500 text-blue-500"
                    : "border-b-4 border-b-transparent"
                } w-52 flex gap-4 items-center font-semibold hover:bg-gray-200 p-4 `}
                key={index}
                onClick={() => setcheck(index)}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;
