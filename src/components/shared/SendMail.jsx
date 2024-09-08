import { RxCross2 } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import { setopen } from "../../redux/appslice";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
const SendMail = () => {
  const [formdata, setformdata] = useState({
    to: "",
    subject: "",
    message: "",
  });
  const dispatch=useDispatch(); 
  const open=useSelector(store=>store.appslice.open);
  const changehandler =(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const submithandler=async(e)=>{
    e.preventDefault();
    await addDoc(collection(db,"emails"),{
      to:formdata.to,
      subject:formdata.subject,
      message:formdata.message,
      createdAt:serverTimestamp()
    })
    dispatch(setopen(false));
    setformdata(
      {
        to:"",
        subject:"",
        message:""
      }
    )
  }
  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600  rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F5FC] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          className="p-2  rounded-full hover:bg-gray-200 cursor-pointer"
          onClick={() => dispatch(setopen(false))}
        >
          <RxCross2 size={"15px"} />
        </div>
      </div>
      <form   onSubmit={submithandler} className="flex flex-col px-3 gap-2">
        <input
          type="text"
          onChange={changehandler}
          value={formdata.to}
          name="to"
          placeholder="To"
          className="outline-none py-1 border-1 border-gray-500"
        />
        <input
          type="text"
          onChange={changehandler}
          value={formdata.subject}
          name="subject"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changehandler}
          value={formdata.message}
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <button
          type="submit"
          className=" bg-[#0B57D0] rounded-full w-fit px-4 mb-2 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail
