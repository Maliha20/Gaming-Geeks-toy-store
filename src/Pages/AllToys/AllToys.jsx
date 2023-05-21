import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Alltoy from "../Components/Alltoy";
import './AllToys.css'
import useTitle from "../../hooks/useTitle";
const AllToys = () => {
  useTitle('All toys')
  
  const { user } = useContext(AuthContext);
  const [alltoys, setAlltoys] = useState([]);
  const [searchText,setSearchText] =useState("")

  useEffect(() => {
    fetch("https://toy-store-server-five.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  }, []);

 const handleSearch =()=>{
  fetch(`https://toy-store-server-five.vercel.app/toySearchbyName/${searchText}`)
  .then(res=>res.json())
  .then(data=>{
    setAlltoys(data)
  })
 }

  return (
    <div>
      <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
        All games available for sale
      </h2>
      <div className="back-color mx-auto w-64 p-6 text-center rounded-xl">
          <input
            onChange={(event) => setSearchText(event.target.value)}
            type="text"
            className="p-2 rounded-md"
            placeholder='type here'
          />
          <button onClick={handleSearch} className="btn my-2 border border-lime-200 back-color text-yellow-50 font-semibold"
           >Search</button>
        </div>
      <div className="overflow-x-auto container my-12 mx-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
            
              <th className="back-color text-amber-50">Name</th>
              <th className="back-color text-amber-50">Seller's Name</th>
              <th className="back-color text-amber-50">Price</th>
              <th className="back-color text-amber-50">Quantity</th>
              <th className="back-color text-amber-50">View Details</th>
            </tr>
          </thead>
          <tbody>
            {alltoys.map((alltoy) => (
              <Alltoy key={alltoy._id} alltoy={alltoy}></Alltoy>
            ))}
          </tbody>
        </table>
        {/* <div className="my-12 flex justify-center mx-auto">
        <button onClick={handleShowAll} className="btn btn-sm btn-ghost text-amber-50 bg-yellow-900">Show all</button>
        </div> */}
      </div>
    </div>
  );
};

export default AllToys;
