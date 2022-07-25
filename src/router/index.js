import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home/HomeView';
import PasswordPoliciesView from '@/views/pages/PasswordPoliciesView';
import AttackerTypesView from '@/views/pages/PasswordAttacksView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/password-policies',
		name: 'password-policies',
		component: PasswordPoliciesView
	},
	{
		path: '/password-attacks',
		name: 'password-attacks',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/pages/PasswordAttacksView')
	}
];

const router = new VueRouter({
	routes
});

export default router;

