import { Link } from "react-router-dom";
import Header from "./Header";
import { useState,useRef } from "react";
import emailvalidate from "../utils/emailvalidate";
import {emailRegVal} from "../utils/emailRegVal";
import { auth } from "../utils/firebase";
import { updateProfile, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userslice";
import { BACK_GROUND } from "../utils/constants";
const Login=()=>{
    const [signIn,setSignIn]=useState(true);
    const [errMsg,setErrMsg]=useState(null);
    const dispatch=useDispatch();
      const userinfo=useSelector((state)=>state.user);
    const toggleSignIn=()=>{
       setSignIn(!signIn);
    };
    const email=useRef(null);
    const password=useRef(null);
    const fullName=useRef(null);
    const confirmPass=useRef(null);
    const navigate=useNavigate();
    
    const handleValidateClick=async ()=>{
      
     let message;
    if(signIn){
     message=emailvalidate(email.current.value,password.current.value);
    
    }
    else{
     message=emailRegVal(email.current.value,password.current.value,fullName.current.value,confirmPass.current.value);
   
    }
    
      setErrMsg(message);
      if(message)
      {
        return ;
      }
     if (!signIn) {
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then(async (userCredential) => {
    const user = userCredential.user;
    return await updateProfile(user, {
      displayName: fullName.current.value,
    }).then(() => {
      const { uid, email, displayName } = auth.currentUser; // renamed email
      dispatch(addUser({ uid:uid, email:email, displayName:displayName }));
     
     
    });
  })
  .catch((error) => {
    console.log("❌", error.code, "-", error.message);
  });

}

      
      else
      {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // User successfully signed in
        const user = userCredential.user;
     
        // Redirect or update UI
      

      })
      .then(()=>{
       
      }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg("Invalid  Credentials");
        // Display error message to the user
      });
      }
    }
    return(
       <div className="relative w-full h-full overflow-hidden">
            <Header/>
            <div>
               <img className="block lg:scale-105 object-cover w-full min-h-screen z-0" src={BACK_GROUND}
             alt="Logo" />
            </div>
           <div className="absolute sm:w-full md:w-[400px] lg:w-[480px] h-[670px] flex  inset-0 bg-black/80 justify-center pt-7 pb-12 top-[100px] mx-auto rounded-sm">
            
             <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-y-[17px] w-[80%]  p-2.5">
                <h1 className="font-bold text-[25px] lg:text-[32px] text-white">{(signIn) ? "Sign In" : "Sign Up"}</h1>
                 {!signIn && <input ref={fullName} className="border border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Full Name"/>}
                <input ref={email} className="border border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="E-mail or Mobile number"/>
                 <input ref={password} className="border  border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Password"/>
                  {!signIn && <input ref={confirmPass} className="border  border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Confirm Password"/>}
                   {errMsg && <p className="text-red-600 text-[12px] font-bold">{errMsg}</p>}
                <button type="button" className="border border-black bg-red-600  text-white  rounded-md text-[16px] font-bold  p-2" onClick={handleValidateClick}>{(signIn) ? "Sign In" : "Register"}</button>
                {!signIn && <span><button className="border border-black   bg-white/20 text-white  rounded-md text-[16px] font-bold  p-2" onClick={toggleSignIn} >Back to Login</button></span>}
                
                  {
                    (signIn) && <> <h1 className="text-center text-white">OR</h1>
                  <button className="border border-black inset-0 bg-white/20  text-white  rounded-md text-[16px] font-bold  p-2">Use a sign-in code</button>
                  <Link className="text-center underline text-white">Forgot Password?</Link>
                  <div className="flex gap-3">
                    <input className="size-5 " type="checkbox"/>
                    <p className="text-white text-[17px]">Remember Me</p>
                  </div><p className="text-gray-300 text-[17px]">New to NetFlix?<Link className="hover:underline text-[17px] text-white font-bold" onClick={toggleSignIn}>Sign-up now</Link></p>
                  <p className="text-gray-400 text-[14px] font-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                  <p><Link className="underline text-[14px] text-blue-500">Learn More.</Link></p></>
                  
                  }
            </form>
            
           </div>
        </div>
       
    )
}
export default Login;