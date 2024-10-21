const mongoose = require('mongoose');

// Define the Bid Schema
const bidSchema = new mongoose.Schema({
  auctionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auction', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bidAmount: { type: Number, required: true },
  maxBidAmount: { type: Number, required: true },
  bidTime: { type: Date, default: Date.now }
});

const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;

