const mongoose = require('mongoose');

// Define the Auction Schema
const auctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image:{type:String},
  description: { type: String, required: true },
  startingBid: { type: Number, required: true },
  currentBid: { type: Number, default: 0 },
  endDate: { type: Date, required: true },
   
});

const Auction = mongoose.model('Auction', auctionSchema);
module.exports = Auction;

