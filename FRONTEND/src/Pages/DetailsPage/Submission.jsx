import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CountdownTimer from "../../Components/AutionCard/CountdownTimer";

function BidInput({ label, value, onChange }) {
  return (
    <div className="flex flex-col mt-4 w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <label className="flex gap-1 items-center w-full font-medium leading-6 max-md:max-w-full">
          <span className="flex-1 shrink gap-1 self-stretch my-auto w-full min-w-[240px] max-md:max-w-full">
            {label}
          </span>
        </label>
        <div className="flex flex-col mt-1 w-full leading-none whitespace-nowrap max-md:max-w-full">
          <div className="flex gap-2 items-center px-3 py-1 w-full bg-white rounded border border-solid border-zinc-300 min-h-[40px] max-md:max-w-full">
           $ <input
              type="number"
              value={value}
              onChange={onChange}
              aria-label={label}
              className="flex-1 shrink gap-1 self-stretch my-auto min-w-[240px] text-ellipsis bg-transparent border-none outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex justify-center items-center self-end py-3 pr-5 pl-5 mt-5 max-w-full text-base font-semibold leading-none text-white whitespace-nowrap rounded w-[122px] bg-blue-500"
    >
      <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto">
      Submit
      </span>
    </button>
  );
}

function ContinueButton({ auctionItemId, success }) {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={()=>navigate(-1)}
      className="flex justify-center items-center self-end py-3 pr-5 pl-5 mt-5 max-w-full text-base font-semibold leading-none text-white whitespace-nowrap rounded w-[122px] bg-blue-500"
    >
      <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto">
      Continue
      </span>
    </button>
  );
}

function BidInfo({ label, value }) {
  return (
    <div className="flex gap-2 items-center px-1 mt-3 whitespace-nowrap text-zinc-900">
      <div className="flex-1 shrink self-stretch my-auto text-base min-w-[240px] text-ellipsis">
        {label}
      </div>
      <div className="self-stretch my-auto text-2xl font-extrabold">
       $ {value}
      </div>
    </div>
  );
}

function Submission() {
  
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId"); // Assuming you store the user ID in session
  const [straightBid, setStraightBid] = useState(0);
  const [maximumBid, setMaximumBid] = useState(0);
  const [searchParams] = useSearchParams();
  const auctionItemId = searchParams.get("auctionitemid");

  const [itemDetails, setItemDetails] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auction/${auctionItemId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auction item details");
        }

        const data = await response.json();
        setItemDetails(data?.auction);
      } catch (error) {
        console.error("Error fetching auction item:", error);
        setError("Failed to load item details");
      }
    };

    fetchItemDetails();
  }, [auctionItemId, token]);

  const handleBidSubmission = async () => {
    if (straightBid <= itemDetails.currentBid) {
      setError("Your bid must be higher than the current bid.");
      return;
    }

    const bidData = {
      auctionId: auctionItemId,
      userId: userId,
      bidAmount: straightBid,
      maxBidAmount : maximumBid,
      bidTime: new Date(),
    };

    
    try {
      const response = await fetch(`http://localhost:5000/api/auction/${auctionItemId}/bid`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bidData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit bid");
      }

      const result = await response.json();
      console.log("Bid submitted successfully", result);
      setSuccess("Bid submitted successfully")
      setError(null); 
     
    } catch (error) {
      console.error("Error submitting bid:", error);
      setError("Failed to submit bid");
    }
  };

  const bidInputs = [
    { label: "Straight bid", value: straightBid, onChange: (e) => setStraightBid(e.target.value) },
    { label: "Maximum bid", value: maximumBid, onChange: (e) => setMaximumBid(e.target.value) },
  ];

  const bidInfos = [
    { label: "Minimum Bid", value: itemDetails?.startingBid },
    { label: "Current Bid", value: itemDetails?.currentBid },
  ];

  return (
    <main className="flex flex-col max-w-[500px] scale-85">
      <section className="flex flex-col p-8 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
        <header className="flex gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col justify-center self-start">
            <div className="flex gap-3 items-center">
              <h1 className="self-stretch my-auto w-32 text-2xl font-bold rounded-none text-stone-900">
                Submit Bid
              </h1>
              <div className="shrink-0 self-stretch my-auto w-0 border border-solid bg-stone-500 border-stone-500 h-[18px]" />
              <p className="self-stretch my-auto text-sm text-zinc-900">
                {itemDetails?.title}
              </p>
            </div>
          </div>
        </header>
        <hr className="shrink-0 mt-7 h-px border border-solid bg-zinc-400 border-zinc-400 max-md:max-w-full" />
        <form className="flex flex-col mt-2.5 text-sm text-stone-900 max-md:max-w-full">
          {bidInputs.map((input, index) => (
            <BidInput
              key={index}
              label={input.label}
              value={input.value}
              onChange={input.onChange}
            />
          ))}
          {bidInfos.map((info, index) => (
            <BidInfo key={index} label={info.label} value={info.value} />
          ))}
          <p className="mt-3 whitespace-nowrap text-ellipsis text-zinc-900 max-md:max-w-full">
            <CountdownTimer endTime={itemDetails?.endDate} />
          </p>
          {success && <p className="text-green-500">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <SubmitButton success={success} onClick={handleBidSubmission} />
          {success && <ContinueButton auctionItemId={auctionItemId} />}
        </form>
      </section>
    </main>
  );
}

export default Submission;
