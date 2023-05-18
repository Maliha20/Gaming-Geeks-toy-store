import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
   const{createUser} = useContext(AuthContext)
   const[error, setError]= useState("")
   const[success, setSuccess]= useState("")

    const handleRegister= event =>{
        event.preventDefault();
        const form =event.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,confirm,password,name,photo)
        setError("")
        setSuccess("")
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("Please add at least one uppercase letter");
            return;
          } 
          else if (!/(?=.*?[0-9])/.test(password)) {
            setError("Please add at least one number");
            return;
          } 
          else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("Please enter one special character  at least");
            return;
          } 
          else if (!/.{6,}/.test(password)) {
            setError("Password should not be less than 6 characters");
            return;
          }
          else if(password !== confirm){
           setError("Your password didn't match")
           return
          }
          else{
            setSuccess('You have been successfully registered')
            setError('')
            event.target.reset()
          }
    }
    return (
        <div className="hero min-h-screen bg-gray-200">
  <div className="hero-content flex-col w-full ">
  
    <div className="card w-2/3 max-w-md shadow-2xl shadow-yellow-600 bgImage border-8 border-yellow-950">
    <div className="card-body">
     <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-50 font-bold">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input-color input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-50 font-bold">Photo</span>
          </label>
          <input type="text" placeholder="photo URL" name="photo" className="input-color input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-50 font-bold">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input-color input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-50 font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input-color input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-yellow-50 font-bold">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm" name="confirm" className="input-color input input-bordered" />
          <label className="label">
            <a href="#" className="text-yellow-50 font-bold label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='my-4 text-green-500 font-semibold'>{success}</p>
        <p className='my-4 text-red-500 font-semibold'>{error}</p>
        <div className="form-control mt-6">
          <button className="btn btn-ghost back-color text-amber-50 font-semibold">Login</button>
        </div>
        <p className='my-4 text-yellow-50 font-semibold'>Already a member? 
        <Link to="/login" className='hover:text-amber-600'>Login</Link></p>
       </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;