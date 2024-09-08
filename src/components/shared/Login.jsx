
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/appslice";
const Login = () => {
    const dispatch=useDispatch();
    const signinwithGoogle=async()=>{
        try {
            const result=await signInWithPopup(auth,provider);
            console.log(result);
            dispatch(setUser({
                displayName:result.user.displayName,
                email:result.user.email,
                photourl:result.user.photoURL
            }))
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="w-screen h-screen flex justify-center bg-gray-200 items-center">
      <div className="p-8 bg-white flex flex-col gap-3 rounded-md">
        <h1 className="text-center text-xl font-medium mb-5">Login</h1>
        <GoogleButton
          onClick={() => {
            signinwithGoogle();
          }}
        />
        ;
      </div>
    </div>
  );
}

export default Login
