/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	theme: {
		extend: {
			fontFamily: {
				poppins: '\'Poppins\', sans-serif'

			},
			colors: {
				'primary': '#FBD36B',
				'secondary': '#FB896B',
				'third': '#F1A864',
				'font-dark': '#485258',
				'font-light': '#fff'
			},
			height: {
				'80vh': '80vh'
			},
			width: {
				'80vw': '80vw'
			}
		}
	},
	plugins: []
};
