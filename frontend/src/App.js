import { useEffect, useState } from "react";
import GroupFormSection from "./components/GroupFormSection";
import ShowLatestBooking from "./components/ShowLatestBooking";
import { movies, seats, slots } from "./data";
import { useAddNewData } from "./utils/useAddNewData";
import { useFetchLastBooking } from "./utils/useFetchLastBooking";

function App() {
	// Initial form values
	const initialValue = {
		movie: "",
		slot: "",
		seats: {
			A1: 0,
			A2: 0,
			A3: 0,
			A4: 0,
			D1: 0,
			D2: 0,
		},
	};

	// State for new booking form
	const [newBookingShow, setNewBookingShow] = useState(initialValue);

	// State for displaying the latest booking
	const [lastBookingShow, setLastBookingShow] = useState();

	// Custom hook for fetching the last booking
	const fetchLastBooking = useFetchLastBooking;

	// Custom hook for adding new booking data
	const addNewBooking = useAddNewData;

	useEffect(() => {
		// Fetch the latest booking when the component mounts
		fetchLastBooking(setLastBookingShow);
	}, [fetchLastBooking]);

	return (
		<div className="h-fit w-screen overflow-y-scroll overflow-x-hidden bg-slate-200 py-6 flex flex-col lg:h-screen lg:overflow-hidden">
			<h2 className="text-3xl w-[91%] mx-auto ">Book that show !!!</h2>
			<div className="w-full h-full flex flex-col justify-evenly lg:flex-row">
				<form
					className="w-11/12 h-full mx-auto mb-5 lg:w-7/12"
					onSubmit={(e) => {
						e.preventDefault();
						// Add new booking and update state
						addNewBooking(newBookingShow, setLastBookingShow);
						// Reset form to initial values
						setNewBookingShow(initialValue);
					}}>
					{/* GroupFormSections for movie, slot, and seats */}
					<GroupFormSection
						inputType="radio"
						data={movies}
						newBookingShow={newBookingShow}
						setNewBookingShow={setNewBookingShow}
						type={"movie"}
						title={"Select a Movie :"}
					/>
					<GroupFormSection
						inputType="radio"
						data={slots}
						newBookingShow={newBookingShow}
						setNewBookingShow={setNewBookingShow}
						type={"slot"}
						title={"Select a Time Slot :"}
					/>
					<GroupFormSection
						inputType={"Number"}
						data={seats}
						type={"seats"}
						newBookingShow={newBookingShow}
						setNewBookingShow={setNewBookingShow}
						title={"Select a Seat Number :"}
					/>
					{/* Submit button */}
					<button
						className="bg-gradient-to-tr from-cyan-300 to-emerald-400 px-5 py-2 text-lg rounded-lg text-white transition-all ease-linear duration-200 hover:bg-gradient-to-tr hover:to-cyan-300 hover:from-emerald-400"
						type="submit"
						value={"submit"}>
						Submit
					</button>
				</form>

				{/* ShowLatestBooking component */}
				<ShowLatestBooking latestBooking={lastBookingShow} />
			</div>
		</div>
	);
}

export default App;
