/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	content: [],
	theme: {
		extend: {
			fontFamily: {
				openSans: '\'Open Sans\', sans-serif'

			},
			colors: {
				'primary': '#e1f396',
				'secondary': '#146460',
				'third': '#F1A864',
				'font-dark': '#485258',
				'font-light': '#fff'
			},
			backgroundImage: {
				'app-background': 'url(\'./images/app-background2.jpg\')'
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
