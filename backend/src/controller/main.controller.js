import { bookingData, conn } from "../model/Schema.model.js";

// Function to get the last booking record
export const getLastBookingRecord = async function (req, res) {
	try {
		const connectModal = conn.model("bookingData");
		const fetchlastBooking = await connectModal
			.find()
			.sort({ _id: -1 })
			.limit(1);

		if (fetchlastBooking.length === 0) {
			return res.status(200).json({
				success: true,
				message: "No Last Booking Record Found",
			});
		}

		res.status(200).json({
			success: true,
			data: fetchlastBooking,
			message: "Fetched last booking successfully",
		});
	} catch (error) {
		console.error("Error fetching last booking:", error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// Function to add a new booking record
export const addNewBookingRecord = async function (req, res) {
	try {
		const newBooking = new bookingData(req.body);
		await newBooking.save();
		res.status(200).json({
			success: true,
			message: "Created new booking",
		});
	} catch (error) {
		console.error("Error creating new booking:", error);
		res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};
