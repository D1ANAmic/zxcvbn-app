import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		modalOpen: false,
		zxcvbnObject: null,
		passwordLength: '8',
		passwordEntropy: '1',
		numberOfGPUs: '1',
		currentPage: 0,
		pages: [
			{
				pageNumber: 1,
				name: 'Sign up please',
				path: '/password-policies'
			},
			{
				pageNumber: 2,
				name: 'How attackers steal your password',
				path: '/password-attacks'
			},
			{
				pageNumber: 3,
				name: 'How password strength is estimated',
				path: '/password-strength-estimation'
			},
			{
				pageNumber: 4,
				name: 'How long does it take to crack a password?',
				path: '/cracking-time-calculation'
			},
			{
				pageNumber: 5,
				name: 'What is zxcvbn?',
				path: '/zxcvbn'
			},
			{
				pageNumber: 6,
				name: 'Matching: Finding all the patterns',
				path: '/matching'
			},
			{
				pageNumber: 7,
				name: 'Estimating: How many guesses per match?',
				path: '/estimating'
			},
			{
				pageNumber: 8,
				name: 'Searching: Calculating the overall guesses',
				path: '/searching'
			},
			{
				pageNumber: 9,
				name: 'Is Zxcvbn the solution to all our problems?',
				path: '/conclusion'
			},
			{
				pageNumber: 10,
				name: 'How to keep your accounts secure',
				path: '/recommendation'
			}
		]
	},
	plugins: [
		createPersistedState({
			paths: ['currentPage']
		})
	],
	mutations: {
		SET_MODAL_OPEN(state, isModalOpen) {
			state.modalOpen = isModalOpen;
		},
		INIT_ZXCVBN_OBJECT(state, zxcvbn) {
			state.zxcvbnObject = zxcvbn;
		},
		SET_CURRENT_PAGE(state, number) {
			state.currentPage = number;
		},
		SET_PASSWORD_LENGTH(state, length) {
			state.passwordLength = length;
		},
		SET_NUMBER_OF_GPUS(state, numberOfGPUs) {
			state.numberOfGPUs = numberOfGPUs;
		},
		SET_PASSWORD_ENTROPY(state, passwordEntropy) {
			state.passwordEntropy = passwordEntropy;
		}
	}
});
