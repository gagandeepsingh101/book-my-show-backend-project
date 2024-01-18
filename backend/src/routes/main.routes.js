import express from "express";
import {
	addNewBookingRecord,
	getLastBookingRecord,
} from "../controller/main.controller.js";

// Creating an instance of the express Router
const router = express.Router();

// Route to handle GET requests for fetching the last booking record
router.get("/booking", getLastBookingRecord);

// Route to handle POST requests for adding a new booking record
router.post("/booking", addNewBookingRecord);

export default router;
