import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const ExtraCard = ({ review }) => {
  const { rating, img, review_text, game_title } = review;
  return (
    <div>
      <div className="bg-amber-900/10 card md:w-96 h-full bg-base-100 shadow-xl">
        <figure>
          <img className="p-5 rounded-xl h-96"
            src={img}
            alt="customer"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {game_title}
            
          </h2>
          <p>{review_text}</p>
          <div className="card-actions justify-end">
          
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraCard;
