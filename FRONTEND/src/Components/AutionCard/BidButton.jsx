import React from "react";

function BidButton() {
  return (
    <div className="flex gap-3 items-start mt-6 w-full text-base font-semibold leading-none text-white">
      <button className="flex flex-1 shrink justify-center items-center px-6 py-3 w-full rounded basis-0 min-w-[240px] bg-blue-500">
        <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto">
          Bid now
        </span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c28ee7f8851e02b2a5a1c1ab6ae01ac062773a6de00550f1b9300f1216137af?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
      </button>
    </div>
  );
}

export default BidButton;