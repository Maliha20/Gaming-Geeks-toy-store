import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className='mx-auto flex flex-col justify-center space-y-4 my-auto'>
        <progress
          className="progress progress-info w-56"
     ></progress>
        <progress
          className="progress progress-success w-56"
         
        ></progress>
        <progress
          className="progress progress-warning w-56"
        ></progress>
        
      </div>
    );
  }
  if (user) {
    return children;
  } else {
   
    Swal.fire('You need to login first to get access to the page')
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
