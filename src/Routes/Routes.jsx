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

  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:<Home></Home>
        },
        {
         path: "/alltoys",
         element:<AllToys></AllToys>
        },
        {
          path: '/addtoy',
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path: '/mytoys',
          element:<MyToys></MyToys>
        },

        {
          path: "/blogs",
          element: <Blog></Blog>
        }
    ]
    },
    {
      path: '/login',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/login/register',
          element:<Register></Register>
        }
      ]
    }
  ]);

export default router;