import React from 'react'
import Login from './Login';
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const Body = () => {
  const router=createBrowserRouter(
    [
    {
      path:"/",
      element:<Login></Login>,
    },
     {
      path:"/Browse",
      element:<Browse/>,
    },
  ]
  )
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Body