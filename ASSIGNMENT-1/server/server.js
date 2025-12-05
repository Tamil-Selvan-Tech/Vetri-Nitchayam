import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/useRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/cruddb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
