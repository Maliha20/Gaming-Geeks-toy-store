import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLoaderData } from "react-router-dom";
const ViewDetails = () => {
  const toyData = useLoaderData();
  console.log(toyData);
  const { name, photo, price, description, rating, sellerName, subCategory } =
    toyData;

  return (
    <div>
      <h3 className="text-center text-3xl my-6 font-bold text-yellow-950">
        About this game : <span className="text-yellow-500">{name}</span>
      </h3>

      <div className="my-16 flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={photo} alt="photo" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-2xl text-yellow-950">
              {name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="font-semibold text-xl">Description: {description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline text-md">
                Category: {subCategory}
              </div>
              <div className="badge badge-outline text-md">Price: ${price}</div>
            </div>
            <div>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
