import React from "react";
import ImageWithFavorite from "./ImageWithFavourite";
import AuctionStatus from "./AutionStatus";
import BidInfo from "./BidInfo";
import CountdownTimer from "./CountdownTimer";
import BidButton from "./BidButton";

function AuctionItem() {
  return (
    <article className="flex flex-col p-4 bg-white rounded border border-solid shadow-sm border-black border-opacity-10 max-w-[297px]">
      <ImageWithFavorite
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08061fcc5fbdfd719043266560217270a266f994e5259316d19638d6c6b4ab33?placeholderIfAbsent=true&apiKey=7133676902a24cbaafc589aa3495e7b1"
        alt="Sony Black Headphones"
      />
      <div className="flex flex-col mt-3 w-full">
        <AuctionStatus status="Live Auction" />
        <h2 className="mt-2 text-base font-semibold whitespace-nowrap text-ellipsis text-zinc-900">
          Sony Black Headphones
        </h2>
        <BidInfo label="Minimum Bid" amount="$100" />
        <BidInfo label="Current Bid" amount="$157" />
        <CountdownTimer endTime="1 day 12 hrs 43 minutes" />
      </div>
      <BidButton />
    </article>
  );
}

export default AuctionItem;