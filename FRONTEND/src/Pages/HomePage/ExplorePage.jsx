import { useEffect, useState } from "react";
import AuctionItem from "../../Components/AutionCard/AutionItem";

function ExplorePage() {
  const username = sessionStorage.getItem("username");
  const token = sessionStorage.getItem("token");
  const [auctionItems, setAuctionItems] = useState([]);
  useEffect(() => {
    // Function to fetch auction items
    const fetchAuctions = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auction/", {
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
        setAuctionItems(data); // Set the auctions state with the fetched data
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    // Fetch auctions when the component loads
    fetchAuctions();
  }, []); // Empty dependency array ensures the effect runs once when component mounts
  return (
    <>
      <div className="flex overflow-hidden flex-col  bg-white">
        <main className="flex flex-col  w-full text-black max-md:max-w-full">
          <h2 className="text-2xl font-bold pt-10 pl-10">
            Welcome <span className="text-blue-700">{username}!</span>
          </h2>

          <div className="flex gap-5 scale-95 flex-wrap justify-center">
          {auctionItems.length !== 0 && auctionItems.map((i, index) => <AuctionItem key={index} item={i} />)}

          </div>
        </main>
      </div>
    </>
  );
}

export default ExplorePage;
