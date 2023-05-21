import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import "./MyToys.css";
import Mytoy from "../Components/Mytoy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { FaArrowDown } from 'react-icons/fa';
const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [mytoys, setMytoys] = useState([]);
 

  useEffect(() => {
    fetch(`http://localhost:5000/addtoy/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
      setMytoys(data);
       
      });
  }, [user]);
   
 
    
//  const handleLow=()=>{
// if(data){
//   setMytoys(data.descendingResult)
//  }
// }


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

              const remaining = mytoys.filter((mytoy) => mytoy._id !== id);
              setMytoys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
        My Toys
      </h2>
      {/* <div className="container mx-auto dropdown flex flex-col md:flex-row justify-end ">
          <label tabIndex={0} className="text-yellow-900 font-semibold  btn btn-ghost m-1">
            Sort By Price:  <FaArrowDown className="text-yellow-900 mx-2"></FaArrowDown>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li onClick={()=>handleHigh(data)}>
              <a>Higher to lower</a>
            </li>
            <li onClick={handleLow}>
              <a>Lower to higher</a>
            </li>
          </ul>
        </div> */}

      <div className="overflow-x-auto container my-12 mx-auto w-full">
       
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th scope="col" className="back-color text-2xl text-amber-50">
                #
              </th>
              <th scope="col" className="back-color text-amber-50">
                Name
              </th>
              <th scope="col" className="back-color text-amber-50">
                Price
              </th>
              <th scope="col" className="back-color text-amber-50">
                Description
              </th>
              <th scope="col" className="back-color text-amber-50">
                Quantity
              </th>
              <th scope="col" className="back-color text-amber-50">
                Sub Category
              </th>
              <th scope="col" className="back-color text-amber-50">
                Seller's Name
              </th>
              <th scope="col" className="back-color text-amber-50">
                Seller's Mail
              </th>
              <th scope="col" className="back-color text-amber-50">
                Rating
              </th>
              <th scope="col" className="back-color text-amber-50">
                Update
              </th>
              <th scope="col" className="back-color text-amber-50">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {mytoys.map((mytoy, index) => (
              <Mytoy
                key={mytoy._id}
                mytoy={mytoy}
                handleDelete={handleDelete}
                index={index}
              ></Mytoy>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
