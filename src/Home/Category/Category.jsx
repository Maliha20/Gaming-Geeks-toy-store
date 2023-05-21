import React from "react";
import { Link } from "react-router-dom";

const Category = ({ alltoy }) => {
  const { _id, price, name, photo, rating } = alltoy;
  return (
    
      <div className="my-12 p-3 shadow-2xl card md:w-96 border-4 bg-stone-200 border-yellow-900" data-aos="fade-left">
        <figure>
          <img className="rounded-xl shadow-lg"
            src={photo}
            alt=""
          />
        </figure>
        <hr className="my-2 rounded-sm border-t-2 border-yellow-900 text-yellow-900" />
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p className="text-yellow-900 text-xl font-semibold">Price: {price}</p>
          <p className="text-yellow-900 text-xl font-semibold">Rating:{rating}</p>
          <div className="card-actions justify-end">
          <Link to={`/login/toy/${_id}`}> <button className="bg-yellow-950 text-amber-50 btn btn-ghost btn-xs">View details</button></Link>
          </div>
        </div>
      </div>
   
  );
};

export default Category;
