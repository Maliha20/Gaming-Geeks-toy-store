import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Alltoy from "../Components/Alltoy";
import './AllToys.css'
const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [alltoys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setAlltoys(data);
      });
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl my-6 font-bold text-yellow-950">
        All games available for sale
      </h2>
      <div className="overflow-x-auto container my-12 mx-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="back-color">
                <label>
                  <input type="checkbox" />
                </label>
              </th>
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
      </div>
    </div>
  );
};

export default AllToys;
