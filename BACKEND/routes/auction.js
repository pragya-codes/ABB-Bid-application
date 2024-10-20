const express = require('express');
const Auction = require('../models/Auction');
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
    // Fetch all auctions from the Auction model
    const auctions = await Auction.find();
    
    // Send the fetched auctions as the response
    res.status(200).json(auctions);
  } catch (error) {
    // Log and handle any errors that occur during the fetch
    console.error('Error fetching auctions:', error.message);
    res.status(500).json({ error: 'Failed to fetch auctions', details: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id);
    if (!auction) return res.status(404).json({ error: 'Auction not found' });
    res.status(200).json(auction);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

//imagelinkformat -   https://drive.google.com/uc?export=view&id=1ftbDkm2OLVWvC7p204UjOxaz8fr1KNM8