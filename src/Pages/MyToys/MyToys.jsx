import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './MyToys.css'
import Mytoy from '../Components/Mytoy';
const MyToys = () => {
    const {user}= useContext(AuthContext);
    const [mytoys, setMytoys] =useState([])


    useEffect(()=>{
          fetch(`http://localhost:5000/mytoys/${user?.email}`)
          .then(res=>res.json())
          .then(data=>{
            setMytoys(data)
          })
    },[user])
    return (
        <div>
           <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
        My Toys
      </h2>
     
      <div className="overflow-x-auto container my-12 mx-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th scope='col' className="back-color text-2xl text-amber-50">#</th>
              <th scope='col' className="back-color text-amber-50">Name</th>
              <th scope='col' className="back-color text-amber-50">Seller's Name</th>
              <th scope='col' className="back-color text-amber-50">Price</th>
              <th scope='col' className="back-color text-amber-50">Quantity</th>
              <th scope='col' className="back-color text-amber-50">Update</th>
              <th scope='col' className="back-color text-amber-50">Delete</th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map((mytoy, index) => (
             <Mytoy key={mytoy._id} mytoy={mytoy} index={index}></Mytoy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        
    );
};

export default MyToys;