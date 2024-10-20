import React, { useEffect, useState } from "react";

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countdown = setInterval(() => {
      // Calculate the time remaining
      const now = new Date().getTime();
      const auctionEndTime = new Date(endTime).getTime();
      const distance = auctionEndTime - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the remaining time
      if (distance < 0) {
        // Auction has ended
        clearInterval(countdown);
        setTimeLeft("Auction ended");
      } else {
        setTimeLeft(`${days}days ${hours}hrs ${minutes}mins ${seconds}sec`);
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, [endTime]);

  return (
    <p className="px-1 mt-3 w-full  font-medium text-sm text-zinc-900">
      Ends in: {timeLeft}
    </p>
  );
}

export default CountdownTimer;
