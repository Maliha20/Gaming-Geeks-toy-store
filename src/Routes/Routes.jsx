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
          element:<AddToys></AddToys>
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
  ]);

export default router;