import React from "react";

function BidHistory({bidhistory}) {
console.log(bidhistory)
 

  return (
    <ul className="leading-5 text-black">
      {bidhistory.map((bid, index) => (
        <li key={index} className="mb-2">
          <span >
            {bid.userId.username} bids ${bid.bidAmount}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default BidHistory;