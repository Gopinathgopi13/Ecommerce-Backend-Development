const express = require("express");
require("dotenv").config();
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoute");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const cors = require("cors");



const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(cors());

// MongoDB connection
connectDB();

app.use("/api", productRoutes);
app.use("/api/", userRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
