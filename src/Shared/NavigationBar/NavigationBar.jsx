import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logogame.png";
import ActiveRoute from "../../Pages/ActiveRoute/ActiveRoute";
import "./NavigationBar.css";
import { AuthContext } from "../../Provider/AuthProvider";

const NavigationBar = () => {
  const {user, userSignOut} =useContext(AuthContext)
  const handleLogout =()=>{
    userSignOut()
    .then()
    .catch((error) => {
      console.log(error);
    });
  }
    return (
        <div className="bg-color w-full top-0 py-2">
        <div className="relative navbar py-16">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
             <ActiveRoute to="/">Home</ActiveRoute>
         <ActiveRoute to="/login/alltoys">All Toys</ActiveRoute>
             {
              user && <>
              <ActiveRoute to="/login/mytoys">My Toys</ActiveRoute>
             <ActiveRoute to="/login/addtoy">Add a Toy</ActiveRoute>
              </> 
             }
             <ActiveRoute to="/login/blogs">Blogs</ActiveRoute>
          </ul>
        </div>
          <img className="md:w-56 md:h-40 w-28 h-28 absolute md:top-0 md:left-6 left-1/2 top-24 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0" src={logo} alt="" />
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <ActiveRoute to="/">Home</ActiveRoute>
         <ActiveRoute to="/login/alltoys">All Toys</ActiveRoute>
             {
              user && <>
              <ActiveRoute to="/login/mytoys">My Toys</ActiveRoute>
             <ActiveRoute to="/login/addtoy">Add a Toy</ActiveRoute>
              </> 
             }
             <ActiveRoute to="/login/blogs">Blogs</ActiveRoute>
          </ul>
      </div>
      { user ? 
      <div className="flex flex-col md:flex-row ms-12 md:ms-0 navbar-end">
        <img className="md:me-4 mb-4 md:mb-0 w-12 md:w-20 rounded-full border-4 border-yellow-100" title={user.displayName} src={user.photoURL}  alt="" />
        <button onClick={handleLogout} className="btn text-yellow-100 bg-yellow-950 btn-ghost px-4 md:me-8">LogOut</button>
         </div>
       
       : <div className="navbar-end">
       <Link to="/login"><button className="btn text-yellow-100 bg-yellow-950 btn-ghost px-1 md:px-4 md:me-12">Login</button></Link>
       </div>
      }
    </div>
    </div>
    
    );
};

export default NavigationBar;