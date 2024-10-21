import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username");
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownItems = [
    { text: "View Profile", onClick: () => navigate("/explorepage") },
    { text: "Settings", onClick: () => navigate("/explorepage") },
    { text: "My bids", onClick: () => navigate("/explorepage") },
    { text: "Credit Cards", onClick: () => navigate("/explorepage") },
    { text: "My Auctions", onClick: () => navigate("/explorepage") },
    { text: "Invite Colleagues", onClick: () => navigate("/explorepage") },
    { text: "Notifications", onClick: () => navigate("/explorepage") },
    { text: "Community", onClick: () => navigate("/explorepage") },
    { text: "Support", onClick: () => navigate("/explorepage") },
    { text: "API", onClick: () => navigate("/explorepage") },
    {
      text: "Logout",
      onClick: () => {
        sessionStorage.removeItem("username");
        navigate("/login");
      },
    },
  ];
  return (
    <div className="flex flex-wrap gap-8 items-center w-full max-h-[90px] max-md:max-w-full bg-customHeader">
      <div className="flex flex-wrap flex-1 shrink gap-2 items-center self-stretch my-3 text-3xl font-bold basis-0 min-w-[240px] text-zinc-900 max-md:max-w-full pl-10">
        <img
          loading="lazy"
          src="./src/assets/Vector.png"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-14 aspect-[1.08]"
          onClick={() => navigate("/home")}
        />
        <div
          className="gap-2.5 self-stretch my-auto"
          onClick={() => navigate("/home")}
        >
          Genix Auctions
        </div>
      </div>
      <div className="flex gap-7 font-semibold justify-around pr-10">
        {navigationItems.map((i, index) => (
          <button key={index}>{i.text} &#11167;</button>
        ))}
        {!username ? (
          <>
            <button
              className="text-blue-600"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="py-2 px-5 text-white rounded-sm"
              style={{
                background:
                  "linear-gradient(79.69deg, #1D4ED8 -0.64%, #5AD7FE 107.84%)",
              }}
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </>
        ) : (
          <div className="relative">
            <button onClick={toggleDropdown}>
              <FaRegUserCircle style={{ fontSize: "2rem" }} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
                <ul className="list-none p-2">
                  {dropdownItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-1 px-3 hover:bg-gray-200 cursor-pointer"
                      onClick={item.onClick}
                    >
                      <span style={item.text === "Logout" ? { color: "red" } : { color: "black" }}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
