import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/home/HomeView';
import PasswordPoliciesView from '@/views/pages/PasswordPoliciesView';
import AttackerTypesView from '@/views/pages/PasswordAttacksView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/password-policies',
		name: 'Sign up please',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "password-policies" */ '@/views/pages/PasswordPoliciesView')
	},
	{
		path: '/password-attacks',
		name: 'How attackers steal your password',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "password-attacks" */ '@/views/pages/PasswordAttacksView')
	},
	{
		path: '/password-strength-estimation',
		name: 'How password strength is calculated',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "password-strength-estimation" */ '@/views/pages/PasswordStrengthEstimationView')
	}
];

const router = new VueRouter({
	routes
});

export default router;

