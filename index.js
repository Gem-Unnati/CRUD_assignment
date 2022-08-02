const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

// db connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Importing all routes
const productRoutes = require("./routes/product");

// Middlewares
app.use(express.json());
app.use(cors());

// Route all middlewares
app.use("/api/products", productRoutes);

app.listen(4000, () => console.log("server is up and running on port number 4000!"));