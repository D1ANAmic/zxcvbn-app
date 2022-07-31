import Vue from 'vue';
import App from '@/ZxcvbnApp.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/index.css';
//Directives
import ClickOutside from 'vue-click-outside';

Vue.config.productionTip = false;
Vue.directive('click-outside', ClickOutside);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
