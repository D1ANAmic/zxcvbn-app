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
				'app-background': 'url(\'./images/app-background2.jpg\')',
				/*carousel images*/
				'bruteforce': 'url(\'./images/passwordAttacks/brute_force.png\')',
				'keylogger': 'url(\'./images/passwordAttacks/keylogger.png\')',
				'dictionary': 'url(\'./images/passwordAttacks/dictionary_attack.png\')',
				'credential-stuffing': 'url(\'./images/passwordAttacks/credential_stuffing.png\')',
				'password-spraying': 'url(\'./images/passwordAttacks/password_spraying.png\')',
				'phishing': 'url(\'./images/passwordAttacks/phishing.png\')'
			},
			height: {
				'80vh': '80vh'
			},
			width: {
				'80vw': '80vw'
			},
			keyframes: {
				appear: {
					'0%':{
						transform: 'scale(3,3)',
						opacity: '0'
					},
					'100%':{
						transform: 'scale(1,1)',
						opacity: '1'
					}
				}
			},
			animation: {
				appear: 'appear 5s ease-in-out'
			}
		}
	},
	plugins: []
};
