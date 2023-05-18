import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logogame.png";
import ActiveRoute from "../../Pages/ActiveRoute/ActiveRoute";
import './Navbar.css'

const Navbar = () => {
  return (
   <div className="bg-color absolute w-full top-0 py-2">
        <div className="my-4 mx-12 flex flex-col md:flex-row items-center justify-between">
      <div>
        <img className="w-56 h-40" src={logo} alt="" />
      </div>
      <div>
        <ActiveRoute to="/">Home</ActiveRoute>
        <ActiveRoute to="/alltoys">All Toys</ActiveRoute>
        <ActiveRoute to="/mytoys">My Toys</ActiveRoute>
        <ActiveRoute to="/addtoy">Add a Toy</ActiveRoute>
        <ActiveRoute to="/blogs">Blogs</ActiveRoute>
      </div>

      <button className="btn text-amber-50 bg-yellow-950 btn-ghost">Login</button>
    </div>
    </div>
  );
};

export default Navbar;
