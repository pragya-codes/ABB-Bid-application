const express = require('express');
const Auction = require('../models/Auction');
const Bid = require('../models/Bid')
const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();

// Create a new auction
router.post('/create', authMiddleware, async (req, res) => {
      
      const { title, image, description, startingBid, currentBid, endDate } = req.body;
  
  try {
    const auction = new Auction({
      title,
      image,
      description,
      startingBid,
      currentBid,
      endDate : new Date(endDate),
     
    });

    await auction.save();
    res.status(201).json(auction);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create auction' });
  }
});

//Get all auctions
router.get('/', authMiddleware, async (req, res) => {
  try {
  
    const auctions = await Auction.find();
    
   
    res.status(200).json(auctions);
  } catch (error) {
   
    console.error('Error fetching auctions:', error.message);
    res.status(500).json({ error: 'Failed to fetch auctions', details: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    const bidhistory = await Auction.findById(req.params.id)
      .populate({
        path: 'bidHistory.userId',
        select: 'username' // Only fetch the 'username' field from the User model
      });
    if (!auction) return res.status(404).json({ error: 'Auction not found' });
    res.status(200).json({auction, bidhistory});
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.post('/:auctionId/bid', async (req, res) => {
  // const { auctionId } = req.params;
  const { auctionId, bidAmount, userId, maxBidAmount, bidTime } = req.body;
console.log(auctionId, userId, bidAmount, maxBidAmount, bidTime)
  try {
    const auction = await Auction.findById(auctionId);
    if (!auction) return res.status(404).json({ error: 'Auction not found' });

    // Check if the bid is higher than the current bid
    if (bidAmount <= auction.currentBid) {
      return res.status(400).json({ error: 'Bid amount must be higher than the current bid' });
    }

    // Update the auction's currentBid and bidHistory
    auction.currentBid = bidAmount;
   
    auction.bidHistory.push({ userId, bidAmount });

    await auction.save();

    // Create a new bid record in the Bid model
    const bid = new Bid({
      auctionId,
      userId,
      bidAmount,
      maxBidAmount,
      bidTime
    });
    await bid.save();

    res.status(201).json({ message: 'Bid placed successfully', auction });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place bid' });
  }
});

module.exports = router;

//imagelinkformat -   https://drive.google.com/uc?export=view&id=1ftbDkm2OLVWvC7p204UjOxaz8fr1KNM8