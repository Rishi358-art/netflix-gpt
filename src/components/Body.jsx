import React from 'react'
import Login from './Login';
import Browse from './Browse';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useDispatch} from 'react-redux';

const Body = () => {
  

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
 
  return (
    <div className="w-full h-full">
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body