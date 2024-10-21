import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
function Review({ avatar, rating, content, author, date }) {
  return (
    <article className="flex flex-col items-start mt-6 max-w-full w-[700px]">
      <div className="flex flex-wrap gap-6 text-base leading-7 text-zinc-900">
      <FaRegUserCircle style={{fontSize:"2rem"}}/>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
         <span className="flex items-center">{rating} <MdOutlineStarPurple500 /> </span> 
          <p className="mt-6 max-md:max-w-full">{content}</p>
        </div>
      </div>
      <div className="flex flex-col mt-6 ml-16 text-sm leading-loose max-md:ml-2.5">
        <div className="font-bold text-zinc-900">{author}</div>
        {date && <div className="text-zinc-500 max-md:mr-0.5">{date}</div>}
      </div>
      <hr className="shrink-0 self-stretch mt-8 w-full h-px border-2 border-solid bg-zinc-100 border-zinc-100" />
    </article>
  );
}

export default Review;