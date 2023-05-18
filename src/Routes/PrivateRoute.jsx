import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className='text-center my-5'>
        <progress
          className="progress progress-warning w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-warning w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-warning w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-warning w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-warning w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default PrivateRoute;
