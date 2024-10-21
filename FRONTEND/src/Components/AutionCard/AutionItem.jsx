import React from "react";
import ImageWithFavorite from "./ImageWithFavourite";
import AuctionStatus from "./AutionStatus";
import BidInfo from "./BidInfo";
import CountdownTimer from "./CountdownTimer";
import BidButton from "./BidButton";

function AuctionItem({item}) {
  console.log("item from the card", item)
  return (
    <article className="flex flex-col p-4 bg-white rounded border border-solid shadow-sm border-black border-opacity-10 max-w-[297px]">
      <ImageWithFavorite
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-col mt-3 w-full">
        <AuctionStatus status="Live Auction" />
        <h2 className="mt-2 text-base font-semibold whitespace-nowrap text-ellipsis text-zinc-900">
         {item.title}
        </h2>
        <BidInfo label="Minimum Bid" amount={item.startingBid} />
        <BidInfo label="Current Bid" amount={item.currentBid} />
        <CountdownTimer endTime={item.endDate} />
      </div>
     {location.pathname.includes("/explorepage") && <BidButton itemid={item._id}/>}
    </article>
  );
}

export default AuctionItem;