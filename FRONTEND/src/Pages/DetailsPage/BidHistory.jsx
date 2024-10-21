import React from "react";

function BidHistory() {
  const bids = [
    { bidder: "Your bid", amount: 165, isHighest: true },
    { bidder: "The Floor", amount: 157 },
    { bidder: "The Floor", amount: 150 },
    { bidder: "Internet Bidder", amount: 145 },
    { bidder: "The Floor", amount: 140 },
    { bidder: "Internet Bidder", amount: 132 },
    { bidder: "The Floor", amount: 111 },
    { bidder: "Internet Bidder", amount: 109 },
    { bidder: "The Floor", amount: 105 }
  ];

  return (
    <ul className="leading-5 text-black">
      {bids.map((bid, index) => (
        <li key={index} className="mb-2">
          <span className={bid.isHighest ? "font-bold" : ""}>
            {bid.bidder} bids ${bid.amount}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default BidHistory;