import React from "react";

const GroupFormSection = ({
	inputType,
	newBookingShow,
	setNewBookingShow,
	type,
	data,
	title,
}) => {
	// Event handler for radio input change
	const handleRadioChange = (value) => {
		setNewBookingShow((prevState) => ({
			...prevState,
			[type]: value,
		}));
	};

	// Event handler for number input change
	const handleNumberInputChange = (value, inputValue) => {
		setNewBookingShow((prevState) => ({
			...prevState,
			seats: {
				...prevState.seats,
				[value]: Number(inputValue),
			},
		}));
	};

	return (
		<div className="flex flex-col border border-black my-5 rounded-xl py-4 px-2">
			{/* Section title */}
			<h1 className="px-2 text-xl font-bold md:text-2xl">{title}</h1>
			<div className="flex flex-wrap w-full mx-auto">
				{/* Conditional rendering based on inputType */}
				{inputType === "radio" ? (
					// Render radio inputs
					data.map((value) => (
						<label
							key={value}
							className={
								"border border-black px-2 py-3 rounded-lg m-2 " +
								(newBookingShow[type] === value
									? "bg-rose-500 hover:bg-rose-500"
									: "hover:bg-rose-200")
							}
							htmlFor={`${type}-${value}`}>
							{value}
							<input
								className="hidden"
								type="radio"
								name={type}
								id={`${type}-${value}`}
								value={value}
								checked={newBookingShow[type] === value}
								onChange={() => handleRadioChange(value)}
							/>
						</label>
					))
				) : (
					// Render number inputs
					<div className="w-full h-full flex flex-wrap justify-evenly">
						{data.map((value) => (
							<label
								key={value}
								className={
									"border border-black py-1 px-2 rounded-md w-24 my-3 flex flex-col justify-between items-center " +
									(newBookingShow.seats[value] > 0
										? "bg-rose-500 hover:bg-rose-500"
										: "hover:bg-rose-200")
								}>
								<h1 className="text-md font-bold md:text-lg">Type {value}</h1>
								<input
									id={`${type}-${value}`}
									className="w-10 p-1 h-fit my-2"
									type="number"
									name={value}
									value={newBookingShow.seats[value]}
									min={0}
									onChange={(e) =>
										handleNumberInputChange(value, e.target.value)
									}
								/>
							</label>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default GroupFormSection;
