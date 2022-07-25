import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		modalOpen: false,
		zxcvbnObject: null,
		allPages: 10,
		currentPage: 1

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
