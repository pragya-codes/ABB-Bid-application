import React from "react";

function BidButton() {
  return (
    <div className="flex gap-3 items-start mt-6 w-full text-base font-semibold leading-none text-white">
      <button
        style={{
          background:
            "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
        }}
        className="flex flex-1 shrink justify-center items-center px-6 py-3 w-full rounded basis-0 min-w-[240px] text-white"
      >
        <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto">
          Bid now &#129122; 
        </span>
      </button>
    </div>
  );
}

export default BidButton;
