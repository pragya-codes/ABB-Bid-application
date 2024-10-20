import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigationItems = [
    {
      text: "Auctions",
    },
    {
      text: "Bidding",
    },
    {
      text: "About us",
    },
  ];
  return (
    <div className="flex flex-wrap gap-8 items-center w-full max-h-[90px] max-md:max-w-full bg-customHeader">
      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-3 text-3xl font-bold basis-0 min-w-[240px] text-zinc-900 max-md:max-w-full pl-10" >
        <img
          loading="lazy"
          src="./src/assets/Vector.png"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-14 aspect-[1.08]"
          onClick={()=> navigate("/home")}
        />
        <div className="gap-2.5 self-stretch my-auto" onClick={()=> navigate("/home")}>Genix Auctions</div>

        
      </div>
      <div className="flex gap-7 font-semibold justify-around pr-10">{navigationItems.map((i, index) => (
          <button  key={index}>{i.text} &#11167;</button>
        ))}
        <button className="text-blue-600" onClick={()=>navigate("/login")}>Login</button>
        <button className="py-2 px-5 text-white rounded-sm" style={{background: "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)"}} onClick={()=> navigate("/signup")}>Get Started</button>
        </div>
      
    </div>
  );
}

export default Header;
