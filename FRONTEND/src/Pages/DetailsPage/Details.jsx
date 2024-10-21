import React, { useEffect, useState } from "react";
import BackToCatalog from "./BackToCatalog";
import Description from "./Description";
import ReviewList from "./ReviewList";
import BidHistory from "./BidHistory";
import BidButton from "./SubmitBid";
import { useLocation } from "react-router-dom";
import AuctionItem from "../../Components/AutionCard/AutionItem";
import SubmitBid from "./SubmitBid";

function DetailsPage() {
  const location = useLocation();
  const { item_id } = location.state || {};
  console.log(item_id)

  const token = sessionStorage.getItem("token");

  const [itemdetails, setItemDetails] = useState(null);
  const [bidhistorydetails, setbidhistorydetails] = useState(null);
  useEffect(() => {
    // Function to fetch auction items
    const fetchitemdetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/auction/${item_id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch auctions");
        }

        const data = await response.json();
        console.log(data); // Log the response data in console
        setItemDetails(data?.auction); // Set the auctions state with the fetched data
        setbidhistorydetails(data?.bidhistory.bidHistory)
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    // Fetch auctions when the component loads
    fetchitemdetails();
  }, []); // Empty dependency array ensures the effect runs once when component mounts

  return (
    <main className="self-center mt-11 ml-4 w-full max-w-[1631px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-10">
            <BackToCatalog />
            <br/>
            {itemdetails && <AuctionItem item={itemdetails} />}
          </div>
        </aside>
        <section className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <Description descp={itemdetails?.description}/>
            <ReviewList />
          </div>
        </section>
        <aside className="flex flex-col ml-5 w-[25%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-9 w-full text-base font-semibold max-md:mt-10">
           {bidhistorydetails && <BidHistory bidhistory={bidhistorydetails}/>}
            {itemdetails && <SubmitBid auctionitemid={item_id} />}
          </div>
        </aside>
      </div>
    </main>
  );
}

export default DetailsPage;