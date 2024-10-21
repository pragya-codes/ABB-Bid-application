import React from "react";

function ImageWithFavorite({ src, alt }) {
  return (
    <div className="flex overflow-hidden relative flex-col justify-end items-end px-16 pt-2.5 pb-36 w-full rounded border border-rose-100 border-solid aspect-[1.425]  ">
      <img loading="lazy" src={src} alt={alt} className="object-cover absolute inset-0 size-full" />
      <button className="flex relative gap-2.5 justify-center items-center top-2 mb-0 w-8 h-8 bg-white rounded-[50px] left-11 " aria-label="Add to favorites">
      &#9829;
      </button>
    </div>
  );
}

export default ImageWithFavorite;