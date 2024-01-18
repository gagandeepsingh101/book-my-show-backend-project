import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export const connectDB = async () => {
	try {
		const connectInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${DB_NAME}`
		);
		console.log(
			"Database connection established on " + connectInstance.connection.host
		);
	} catch (error) {
		console.error("Error connecting to Mongo : ", error.message);
	}
};
