import React from "react";
import { Link } from "react-router-dom";

const Alltoy = ({ alltoy }) => {
  const {_id, photo, name, subCategory, sellerName, price, quantity } = alltoy;
  
  return (
     <tr>
      <th className="bg-amber-50">
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td className="bg-amber-50">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={photo}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{subCategory}</div>
          </div>
        </div>
      </td>
      <td className="bg-amber-50">
       {sellerName}
      </td>
      <td className="bg-amber-50">{'$'+ price}</td>
      <td className="bg-amber-50">{quantity}</td>
      <th className="bg-amber-50">
       <Link to={`/login/toy/${_id}`}> <button className="bg-yellow-950 text-amber-50 btn btn-ghost btn-xs">View details</button></Link>
      </th>
    </tr>
  );
};

export default Alltoy;
