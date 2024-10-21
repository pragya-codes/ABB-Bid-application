import React from "react";
import { useNavigate } from "react-router-dom";

function BackToCatalog() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-4 max-w-full text-base font-medium text-center text-blue-700 w-[161px]">
      
      <button  onClick={()=>{navigate("/explorepage")}} className="overflow-hidden gap-2.5 self-stretch px-1 font-semibold">&#129104; Back to catalog</button>
    </div>
  );
}

export default BackToCatalog;