import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateToy from "./UpdateToy";

const Mytoy = ({ mytoy, index, handleDelete, handleToyUpdate }) => {
  const {
    _id,
    photo,
    name,
    subCategory,
    rating,
    sellersMail,
    description,
    sellerName,
    price,
    quantity,
  } = mytoy;

  return (
    <tr>
      <th scope="row" className="bg-amber-50">
        {index + 1}
      </th>
      <td className="bg-amber-50">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{subCategory}</div>
          </div>
        </div>
      </td>
      <td className="bg-amber-50">{"$" + price}</td>
      <td title={description} className="bg-amber-50">
        {description.length < 15 ? (
          <>{description}</>
        ) : (
          <>{description.slice(0, 15)}...</>
        )}
      </td>
      <td className="bg-amber-50">{quantity}</td>
      <td className="bg-amber-50">{subCategory}</td>
      <td className="bg-amber-50">{sellerName}</td>
      <td className="bg-amber-50">{sellersMail}</td>
      <td className="bg-amber-50">{rating}</td>
      <th className="bg-amber-50">
        {
          <Link to={`/login/updateToy/${_id}`}>
            <button className="bg-yellow-950 text-amber-50 btn btn-ghost btn-xs">
              Update
            </button>
          </Link>  
        }
      </th>
      <th className="bg-amber-50">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-yellow-950 text-amber-50 btn btn-ghost btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default Mytoy;
