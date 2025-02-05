/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins-Regular"],
				light: ["Poppins-Light"],
				medium: ["Poppins-Medium"],
				semibold: ["Poppins-SemiBold"],
				bold: ["Poppins-Bold"],
				italic: ["Poppins-Italic"],
			},
		},
	},
	plugins: [],
};
