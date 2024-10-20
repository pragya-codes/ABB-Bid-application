const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const auctionRoutes = require('./routes/auction');
app.use('/api/auction', auctionRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);


// Start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {console.log("Connected to MongoDB Atlas");
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server running on port ${PORT}`)
  )})
  .catch((err) => console.log(err));
