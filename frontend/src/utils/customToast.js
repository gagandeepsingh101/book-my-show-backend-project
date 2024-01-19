import toast from "react-hot-toast";

/**
 * Display a custom success toast with an optional tag.
 * @param {string} message - The message to display in the toast.
 * @param {string} tag - An optional tag for customizing the toast appearance.
 */
export const customSuccessToast = (message, tag = "success") => {
	// Check if the tag is not "success" for customization
	if (tag !== "success") {
		return toast(message, {
			icon: "ℹ️",
			style: {
				padding: "16px",
				color: "#647486",
			},
			iconTheme: {
				primary: "#647486",
				secondary: "white",
			},
		});
	} else {
		// Use the toast.success method for default success toast
		return toast.success(message, {
			style: {
				padding: "16px",
				color: "#647486",
			},
			iconTheme: {
				primary: "#647486",
				secondary: "white",
			},
		});
	}
};

/**
 * Display a custom error toast.
 * @param {string} message - The error message to display in the toast.
 */
export const customErrorToast = (message) =>
	toast.error(message, {
		style: {
			padding: "16px",
			color: "#647486",
		},
		iconTheme: {
			primary: "#647486",
			secondary: "white",
		},
	});
