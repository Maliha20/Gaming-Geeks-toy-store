import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle('Login')
  const { UserSignIn,googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/'
  
  const handleSignIn =(event)=>{
    
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
 
    setError("");
    setSuccess("");
    UserSignIn(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setSuccess('You have successfully signed in')
      setError("")
      form.reset()
    })
    .catch(error=>{
      console.log(error)
      setError(error.message)
      setSuccess("")
    }) 
   }
   const handleGoogleLogin =()=>{
    googleLogin()
    .then(result=>{
      const googleUser =result.user;
      console.log(googleUser)
      navigate(from,{replace : true})
      setSuccess('successfuly logged in')
      setError('')
    })
    .catch(error=>{
      console.error()
      setError(error.message)
      setSuccess('')
    })
  }
  return (
    <div className="hero min-h-screen bg-gray-200">
      <div className="hero-content flex-col w-full ">
        <div className="card w-2/3 max-w-md shadow-2xl shadow-yellow-600 bgImage border-8 border-yellow-950">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-yellow-50 font-bold">
                    Email
                  </span>
                </label>
                <input
                   type="text"
                   placeholder="email"
                   name="email"
                  className="input-color input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-yellow-50 font-bold">
                    Password
                  </span>
                </label>
                <input
                  type={display ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  className="input-color input input-bordered"
                />
                <p onClick={() => setDisplay(!display)}>
                  {display ? (
                    <FaEyeSlash className="text-amber-50"></FaEyeSlash>
                  ) : (
                    <FaEye className="text-amber-50"></FaEye>
                  )}
                </p>
                <label className="label">
                  <a
                    href="#"
                    className="text-yellow-50 font-bold label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="my-2 text-green-500 font-semibold">{success}</p>
              <p className="text-red-500 font-semibold">{error}</p>
              <div className="form-control mt-2">
                <button className="btn btn-ghost back-color text-amber-50 font-semibold">
                  Login
                </button>
              </div>
              <p className="my-2 text-yellow-50 font-semibold">
                New here?{" "}
                <Link to="/login/register" className="hover:text-amber-600">
                  Register first
                </Link>
              </p>
              <p onClick={handleGoogleLogin} className="btn btn-link my-2 text-yellow-50 font-semibold">Google Login</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
