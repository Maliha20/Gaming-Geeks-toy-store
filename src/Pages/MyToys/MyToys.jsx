import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './MyToys.css'
import Mytoy from '../Components/Mytoy';
import Swal from "sweetalert2";
import useTitle from '../../hooks/useTitle';
const MyToys = () => {
  useTitle("My Toys")
    const {user}= useContext(AuthContext);
    const [mytoys, setMytoys] =useState([])
 
    useEffect(()=>{
          fetch(`http://localhost:5000/addtoy/${user?.email}`)
          .then(res=>res.json())
          .then(data=>{
            setMytoys(data)
          })
    },[user])

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/addtoy/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your post has been deleted.", "success");

                const remaining= mytoys.filter(mytoy=> mytoy._id !== id)
                setMytoys(remaining)
              }
            });
        }
      });
    };

    // const handleUpdate =(id)=>{
    //   fetch(`http://localhost:5000/addtoy/${id}`,{
    //     method: "PUT",
    //     headers: {
    //       'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify({status: 'confirm'})
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //       console.log(data)
    //       if(data.modifiedCount>0){
    //         // Swal.fire("Updated!", "Your post has been Updated.", "success");
    //       }
    //   })
    // }

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
             <Mytoy key={mytoy._id} mytoy={mytoy} handleDelete={handleDelete} index={index}></Mytoy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
        
    );
};

export default MyToys;