import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Home from '../Home/Home/Home';
import AllToys from '../Pages/AllToys/AllToys';
import AddToys from '../Pages/AddToys/AddToys';
import MyToys from '../Pages/MyToys/MyToys';
import Blog from '../Pages/Blog/Blog';
import LoginLayout from '../Layout/LoginLayout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Error from '../Pages/Error/Error';

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        }
        
    ]
    },
    {
      path: '/login',
      element:<LoginLayout></LoginLayout>,
      errorElement: <Error></Error>,
      children:[
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/login/register',
          element:<Register></Register>
        },
        {
          path: "/login/alltoys",
          element:<AllToys></AllToys>
         },
         {
           path: '/login/addtoy',
           element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
         },
         {
           path: '/login/mytoys',
           element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
         },
         {
           path: "/login/blogs",
           element: <Blog></Blog>
         }
      ]
    }
  ]);

export default router;