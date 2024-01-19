import React from "react";

const ShowLatestBooking = ({ latestBooking }) => {
	return (
		<div className="w-11/12 h-fit mx-auto px-3 rounded-lg py-2 border border-black lg:w-3/12">
			<h1 className="text-lg font-bold">Latest Show Book Detail :</h1>
			{latestBooking === undefined ? (
				<p>No Latest Book Show Detail Here !!!</p>
			) : (
				<>
					<div className="text-lg">
						<p className="font-semibold">Seats</p>
						{Object.entries(latestBooking.seats).map(([seat, count]) => (
							<p key={seat}>
								{seat} : {count}
							</p>
						))}
					</div>
					<p>
						<span className="font-semibold">Movie :</span> {latestBooking.movie}
					</p>
					<p>
						<span className="font-semibold">Slot : </span>
						{latestBooking.slot}
					</p>
				</>
			)}
		</div>
	);
};

export default ShowLatestBooking;
