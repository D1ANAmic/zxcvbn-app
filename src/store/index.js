import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		modalOpen: false,
		zxcvbnObject: null,
		currentPage: 1,
		// maybe populate it with the routes later? only possible if all routes are only pages that should be displayed in the menu
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
			}
		]
	},
	mutations: {
		SET_MODAL_OPEN(state, isModalOpen) {
			state.modalOpen = isModalOpen;
		},
		INIT_ZXCVBN_OBJECT(state, zxcvbn) {
			state.zxcvbnObject = zxcvbn;
		},
		SET_CURRENT_PAGE(state, number) {
			state.currentPage = number;
		}
	}
});
