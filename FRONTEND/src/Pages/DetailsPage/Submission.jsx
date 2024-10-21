import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function BidInput({ label, value }) {
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
            <input
              type="text"
              value={value}
              aria-label={label}
              className="flex-1 shrink gap-1 self-stretch my-auto min-w-[240px] text-ellipsis bg-transparent border-none outline-none"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <button className="flex justify-center items-center self-end py-3 pr-5 pl-5 mt-5 max-w-full text-base font-semibold leading-none text-white whitespace-nowrap rounded w-[122px] bg-blue-500">
      <span className="overflow-hidden gap-2.5 self-stretch px-1 my-auto">
        Submit
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
        {value}
      </div>
    </div>
  );
}



function Submission() {
  const location = useLocation();
  const data = location.state;
console.log(data)
  const [straightbid, setstraightbid] = useState(0)
const [maximumbid, setmaximumbid] = useState(0)

  const bidInputs = [
    { label: "Straight bid", value: straightbid },
    { label: "Maximum bid", value: maximumbid },
  ];

  const bidInfos = [
    { label: "Minimum Bid", value: itemdetails.startingBid },
    { label: "Current Bid", value : itemdetails.currentBid },
  ];

  return (
    <main className="flex flex-col max-w-[450px] scale-75">
      <section className="flex flex-col p-8 w-full bg-white rounded shadow-sm max-md:px-5 max-md:max-w-full">
        <header className="flex gap-5 justify-between w-full max-md:max-w-full">
          <div className="flex flex-col justify-center self-start">
            <div className="flex gap-3 items-center">
              <h1 className="self-stretch my-auto w-32 text-2xl font-bold rounded-none text-stone-900">
                Submit Bid
              </h1>
              <div className="shrink-0 self-stretch my-auto w-0 border border-solid bg-stone-500 border-stone-500 h-[18px]" />
              <p className="self-stretch my-auto text-sm text-zinc-900">
                {itemdetails.title}
              </p>
            </div>
          </div>
          <div className="flex gap-2.5 justify-center items-center">
            <div className="flex flex-col justify-center items-end self-stretch p-2 my-auto w-8 rounded-3xl">
              
            </div>
          </div>
        </header>
        <hr className="shrink-0 mt-7 h-px border border-solid bg-zinc-400 border-zinc-400 max-md:max-w-full" />
        <form className="flex flex-col mt-2.5 text-sm text-stone-900 max-md:max-w-full">
          {bidInputs.map((input, index) => (
            <BidInput key={index} label={input.label} value={input.value} />
          ))}
          {bidInfos.map((info, index) => (
            <BidInfo key={index} label={info.label} value={info.value} />
          ))}
          <p className="px-1 mt-3 text-base whitespace-nowrap text-ellipsis text-zinc-900 max-md:max-w-full">
            Ends in : {itemdetails.endDate.split("T")}
          </p>
          <SubmitButton />
        </form>
      </section>
    </main>
  );
}

export default Submission;
