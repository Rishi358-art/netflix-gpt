import { Link } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Login=()=>{
    const [signIn,setSignIn]=useState(true);
    const toggleSignIn=()=>{
       setSignIn(!signIn);
    };
    return(
        <div className="relative overflow-hidden">
            <Header/>
            <div>
               <img className="scale-105 object-cover w-full h-full z-0" src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"
             alt="Logo" />
            </div>
           <div className="absolute w-[480px] h-[670px] flex  inset-0 bg-black/80 justify-center pt-7 pb-12 top-[100px] left-[520px] rounder-sm">
            
             <form className="flex flex-col gap-y-[17px] w-[370px]  p-2.5">
                <h1 className="font-bold text-[32px] text-white">{(signIn) ? "Sign In" : "Sign Up"}</h1>
                                {!signIn && <input className="border border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Full Name"/>}
                <input className="border border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="E-mail or Mobile number"/>
                 <input className="border  border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Password"/>
                  {!signIn && <input className="border  border-gray-300 rounded-sm text-[17px] text-gray-300 inset-0 bg-gray-950/30 px-3 py-3.5" placeholder="Confirm Password"/>}
                <button type="button" className="border border-black bg-red-600  text-white  rounded-md text-[16px] font-bold  p-2" >{(signIn) ? "Sign In" : "Register"}</button>
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