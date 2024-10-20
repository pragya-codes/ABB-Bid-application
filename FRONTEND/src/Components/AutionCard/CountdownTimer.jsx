import React from "react";

function CountdownTimer({ endTime }) {
  return (
    <div className="px-1 mt-3 w-full text-base whitespace-nowrap text-ellipsis text-zinc-900">
      Ends in : {endTime}
    </div>
  );
}

export default CountdownTimer;