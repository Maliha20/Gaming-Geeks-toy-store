import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import './ExtraCard.css'
const ExtraCard = ({ review }) => {
  const { rating, img, review_text, game_title } = review;
  return (
    <div>
      <div className="back-color p-6 card md:w-96 h-full bg-base-100 shadow-xl">
        <figure  data-aos="fade-down">
          <img className="rounded-xl h-96"
            src={img}
            alt="customer"
          />
        </figure>
        <div className="card-body" data-aos="fade-up">
          <h2 className="card-title  text-amber-50">
            {game_title}
            
          </h2>
          <p className=" text-amber-50">{review_text}</p>
          <div className="card-actions justify-end">
          
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraCard;
