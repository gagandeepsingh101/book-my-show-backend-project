import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
	movie: {
		type: mongoose.Schema.Types.String,
		required: true
	},
	slot: {
		type: mongoose.Schema.Types.String,
		required: true
	},
	seats: {
		A1: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
		A2: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
		A3: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
		A4: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
		D1: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
		D2: {
			type: mongoose.Schema.Types.Number,
			default: 0,
		},
	},
});

export const bookingData = mongoose.model("bookingData", bookSchema);
export const conn = mongoose.connection;
