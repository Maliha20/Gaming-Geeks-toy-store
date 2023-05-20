import React from "react";

const Category = ({ alltoy }) => {
  const { price, name, photo, rating } = alltoy;
  return (
    
      <div className="my-12 p-3 shadow-2xl card w-96 border-4 bg-stone-200 border-yellow-900 ">
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
            <button className="btn btn-ghost bg-stone-600 text-amber-50">View details</button>
          </div>
        </div>
      </div>
   
  );
};

export default Category;
