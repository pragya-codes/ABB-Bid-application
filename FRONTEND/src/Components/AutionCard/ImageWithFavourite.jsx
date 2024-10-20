import React from "react";

function ImageWithFavorite({ src, alt }) {
  return (
    <div className="flex overflow-hidden relative flex-col justify-end items-end px-16 pt-2.5 pb-36 w-full rounded border border-rose-100 border-solid aspect-[1.425]">
      <img loading="lazy" src={src} alt={alt} className="object-cover absolute inset-0 size-full" />
      <button className="flex relative gap-2.5 justify-center items-center px-1.5 mb-0 w-8 h-8 bg-white rounded-[50px]" aria-label="Add to favorites">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca0fdebfbc2f5df406db92162d8a2a95034d6f6ef58b1045561e2ab70bf55960?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1" alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      </button>
    </div>
  );
}

export default ImageWithFavorite;