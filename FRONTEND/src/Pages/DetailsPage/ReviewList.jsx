import React from "react";
import Review from "./Review";


function ReviewList() {
  const reviews = [
    {
      id: 1,
     
      rating: 5,
      content: "These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm.",
      author: "Kristin Watson",
      date: "March 14, 2021"
    },
    {
      id: 2,
    
      rating: 5,
      content: "I'm blown away by the sound clarity these headphones offer.",
      author: "Jenny Wilson",
      date: "January 28, 2021"
    },
    {
      id: 3,
     
      rating: 4,
      content: "As a frequent flyer, these headphones have become my must-have travel companion.",
      author: "Bessie Cooper",
      date: ""
    }
  ];

  return (
    <section className="mt-6">
      <h2 className="text-base font-semibold text-ellipsis text-zinc-900 max-md:max-w-full">Reviews</h2>
      {reviews.map((review) => (
       <Review key={review.id} {...review} />
      ))}
    </section>
  );
}

export default ReviewList;