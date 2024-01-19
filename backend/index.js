import app from "./src/app.js";
import { connectDB } from "./src/db/connection.js";
import cors from "cors";
import express from "express";
import router from "./src/routes/main.routes.js";
import { config } from "dotenv";
config();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", router);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on url to http://localhost:${PORT}`);
});
