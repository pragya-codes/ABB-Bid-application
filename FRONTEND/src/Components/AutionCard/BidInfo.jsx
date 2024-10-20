import React from "react";

function BidInfo({ label, amount }) {
  return (
    <div className="flex gap-2 items-center px-1 mt-3 w-full whitespace-nowrap text-zinc-900">
      <div className="flex-1 shrink self-stretch my-auto text-base text-ellipsis">
        {label}
      </div>
      <div className="self-stretch my-auto text-2xl font-extrabold">
        {amount}
      </div>
    </div>
  );
}

export default BidInfo;