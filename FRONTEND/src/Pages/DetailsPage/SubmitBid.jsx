import React from "react";
import { useNavigate } from "react-router-dom";

function SubmitBid({auctionitemid}) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-3 items-start mt-7 leading-none text-white max-md:mt-10 w-[80%]">
      <button
      
      onClick={()=>{navigate(`/submissionmodal?auctionitemid=${auctionitemid}`)}}
        style={{
          background:
            "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
        }}
        className="flex flex-1 shrink justify-center items-center py-3  rounded  text-white"
      >
        <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto" >
          Bid now &#129122; 
        </span>
      </button>
    </div>
  );
}

export default SubmitBid;