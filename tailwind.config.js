/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.liquid"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: ".6rem",
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

