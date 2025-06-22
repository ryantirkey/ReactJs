import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Login from './Component/Login';
import Register from './Component/Register';
import Contact from './Component/Contact';
import Profile from './Component/Profile';
import Navbar from './Component/Navbar';
import Home from './Component/Home';


const App = () => {
 
    let router=createBrowserRouter(
        [
            {
                path:"/",
                element:<><Navbar/> <Login/></>
            },
            {
                path:"/home",
                element:<><Navbar/> <Home/></>
            },
            {
                path:"/register",
                element:<><Navbar/> <Register/></>
            },
            {
                path:"/contact",
                element:<><Navbar/> <Contact/></>
            },
            {
                path:"/profile",
                element:<><Navbar/> <Profile/></>
            }

    ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App