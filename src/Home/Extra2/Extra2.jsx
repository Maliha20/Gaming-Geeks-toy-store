import React, { useEffect, useState } from "react";
import ExtraCard from "./ExtraCard";

const Extra2 = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/customer.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-24 container mx-auto">
      <div className="text-center text-5xl my-8 font-bold text-yellow-950">Top Customer Reviews:</div>
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-4">
        {
            reviews.map(review=> 
            <ExtraCard key={review.review_id} review={review}></ExtraCard>)
        }
      </div>
    </div>
  );
};

export default Extra2;
