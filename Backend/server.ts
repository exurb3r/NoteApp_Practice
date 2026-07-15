import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);


import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import connectDB from "./config/dbNoteApp";
import corsOptions from "./config/corsOptions";
//import adminRoutes from "./routes/admins";
//import userRoutes from "./routes/users";
import authRoute from "./routes/auth"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
//app.use("/admins", adminRoutes);
//app.use("/users", userRoutes);
app.use("/auth", authRoute);

// Start server once MongoDB is connected
mongoose.connection.once("open", () => {
  console.log("Connected to Database");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});