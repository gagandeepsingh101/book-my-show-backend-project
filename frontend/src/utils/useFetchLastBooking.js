import axios from "axios";
import { customErrorToast, customSuccessToast } from "./customToast";

/**
 * Fetch the last booking data and update the state.
 * @param {function} setLastBookingShow - The function to set the last booking show.
 */
export const useFetchLastBooking = async (setLastBookingShow) => {
	try {
		// Fetch data from the server
		const response = await axios.get(
			`${
				process.env.REACT_APP_SERVER_URI ||
				`http://localhost:${process.env.PORT || 8080}`
			}/api/booking`
		);

		// Extract data from the response
		const { data } = response;

		if (data.previousBookingData === undefined) {
			// Display success toast if no previous booking data is available
			customSuccessToast(data.message);
		} else {
			// Update the state with the last booking data
			setLastBookingShow(data.previousBookingData[0]);
			// Display success toast
			customSuccessToast(data.message);
		}
	} catch (error) {
		// Log the error for debugging purposes
		console.error("Error fetching previous bookings:", error);
		// Display error toast with a specific error message
		customErrorToast("Error fetching previous bookings: " + error.message);
	}
};
