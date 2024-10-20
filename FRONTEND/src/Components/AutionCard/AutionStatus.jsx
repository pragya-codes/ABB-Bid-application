import React from "react";

function AuctionStatus({ status }) {
  return (
    <div className="flex gap-2 items-center px-1 w-full">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px]">
        <span className="self-start px-3 py-1.5 text-xs text-center text-white bg-emerald-500 rounded-md">
          {status}
        </span>
      </div>
    </div>
  );
}

export default AuctionStatus;