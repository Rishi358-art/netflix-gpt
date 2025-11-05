import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user);
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
    <div className="absolute flex justify-between w-full pl-[150px] pr-[60px] z-10 py-2 bg-linear-to-b from-black" >
        <img className="w-44" src={LOGO}
        alt="logo"/>
        
      {user && <div className="flex gap-2 items-center">
        <img className="w-[50px] h-[50px]" alt="userSign" src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"/>
      <button className="text-amber-50" onClick={handleSignOut}>Sign-Out</button>
    </div>}
    </div>
  )
}

export default Header