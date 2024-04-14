/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.liquid"],
	theme: {
		extend: {
			fontFamily: {
				"ropa-light": ["Ropa Sans Light", "sans-serif"],
				"ropa-regular": ["Ropa Sans Regular", "sans-serif"],
				"ropa-bold": ["Ropa Sans Bold", "sans-serif"],
				"ropa-black": ["Ropa Sans Black", "sans-serif"],
				"hind-light": ["Hind light", "sans-serif"],
				"hind-regular": ["Hind regular", "sans-serif"],
				"hind-semi-bold": ["Hind Semi Bold", "sans-serif"],
			},
			colors: {
				body: "#F8F8F8",
				black: "#05102B",
				orange: "#C98C1C",
				yellow: "#EBBF23",
				blue: {
					dark: "#263761",
					medium: "#405CA1",
					light: "#405DA1"
				},
				gray: {
					medium: "#00000029",
					border: "#E9EAEE",
				}
			}
		},
	},
	plugins: [],
}

