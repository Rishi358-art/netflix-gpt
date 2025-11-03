import React from 'react'
import Login from './Login';
import Browse from './Browse';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch} from 'react-redux';
import { addUser, removeUser } from '../utils/userslice';
const Body = () => {
  const dispatch=useDispatch();

  const router=createBrowserRouter(
    [
    {
      path:"/",
      element:<Login></Login>,
    },
     {
      path:"/browse",
      element:<Browse/>,
    },
  ]
  )
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
       if(user)
       {
        const{uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
       }
       else
       {
        dispatch(removeUser());
       }
    })
  },[dispatch])
  return (
    <div className="w-full h-full">
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body