import axios from "axios";
import { customErrorToast, customSuccessToast } from "./customToast";

/**
 * Add new booking data.
 * @param {Object} bookingData - The data for the new booking.
 * @param {function} setLastBookingShow - The function to set the last booking show.
 */
export const useAddNewData = async (bookingData, setLastBookingShow) => {
	try {
		const { movie, slot, seats } = bookingData;

		// Check if required fields are not empty and at least one seat is selected
		if (movie && slot && Object.values(seats).some((count) => count > 0)) {
			const response = await axios.post(
				process.env.REACT_APP_SERVER_URI ||
					`http://localhost:${
						process.env.REACT_APP_SERVER_PORT || 8080
					}/api/booking`,
				{ ...bookingData },
				{ headers: { "Content-Type": "application/json" } }
			);

			if (response.status === 200) {
				// Update the state with the last booking data
				setLastBookingShow(bookingData);
				customSuccessToast("New booking created successfully");
			}
		} else {
			// Handle case where required fields are missing
			const missingFields = [];

			if (!movie) {
				missingFields.push("Movie");
			}

			if (!slot) {
				missingFields.push("Slot");
			}

			const seatLabels = Object.keys(seats).filter((seat) => seats[seat] > 0);
			if (seatLabels.length === 0) {
				missingFields.push("At least one seat");
			}

			// Generate error message for missing fields
			const errorMessage = `The following fields are required: ${missingFields.join(
				", "
			)}.`;

			// Display error toast with the specific error message
			customSuccessToast(errorMessage, "info");
		}
	} catch (error) {
		// Log the error for debugging purposes
		console.error("Error during new data addition:", error);
		// Display a generic error toast for any other unexpected errors
		customErrorToast("An error occurred while adding new data.");
	}
};
