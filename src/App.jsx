import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Body from "./components/shared/Body";
import Inbox from "./components/shared/Inbox";
import Mail from "./components/shared/Mail";
import SendMail from "./components/shared/SendMail";
import Login from "./components/shared/Login";
import { useSelector } from "react-redux";
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Inbox/>,
        },
        {
          path:"/mail/:id",
          element:<Mail/>
        }
      ]
    }
  
  ]
  )
  const {user}=useSelector(store=>store.appslice);
  return (
    
    <>
    {user?(<div className="bg-[#F6F8FC] overflow-hidden h-screen w-screen">
        <Navbar/>
        <RouterProvider router={router}>
        </RouterProvider>
        <div className="absolute w-[30%] bottom-0 right-20 z-10">
          <SendMail/>
        </div>
      </div>):(<Login/>)}
      
    </>
  );
}

export default App;
