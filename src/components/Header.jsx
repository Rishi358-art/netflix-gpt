import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { LOGO } from '../utils/constants';
import { toggleGptState, toggleLang } from '../utils/GptSlice';
const Header = () => {
  const [selectLang,setSelectLang]=useState("English");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user);
  const lang=useSelector(state=>state.gpt.gptState);
  const handleClick=()=>{
    dispatch(toggleGptState())
  }
  const handleChange=(e)=>{
    const selected=e.target.value;
     setSelectLang(selected);
     dispatch(toggleLang(selected));
  }
  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
 
}).catch((error) => {
  // An error happened.
});

  }
   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
       if(user)
       {
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
       }
       else
       {
        dispatch(removeUser());
         navigate("/");
       }
    })
    return ()=>unsubscribe();
  },[dispatch,navigate])

  return (
    <div className="absolute flex flex-col lg:flex-row justify-center lg:justify-between w-full pl-[30px] lg:pl-[150px]  pr-[60px] z-10 py-2 bg-linear-to-b from-black" >
        <img className="w-44 mx-auto lg:mx-0" src={LOGO}
        alt="logo"/>
        
      {user &&
      <div className="flex items-center mx-auto lg:mx-0   gap-4">
        {lang && <select className="bg-red-800 p-1.5 border border-gray-500 rounded-sm" onChange={handleChange}>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
        }
        <button className="p-2.5 flex items-center h-10 border border-gray-500 rounded-[5px] text-white bg-black/55" onClick={handleClick}>
           {(lang)? <> <i className="fa fa-home text-gray-500 mr-2"></i>
           <span>Home</span></> :<> <i className="fa fa-search text-gray-500 mr-2"></i>
           <span>Search...</span></>}
          
        </button>

         <div className="flex gap-2 items-center">
        
        <img className="w-[50px] h-[50px]" alt="userSign" src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
      
      <button className="text-amber-50" onClick={handleSignOut}>Sign-Out</button>
    </div>
      </div>
       
    }
    </div>
  )
}

export default Header;