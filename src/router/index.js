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
	},
	{
		path: '/zxcvbn',
		name: 'What is Zxcvbn?',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "zxcvbn" */ '@/views/pages/ZxcvbnView')
	},
	{
		path: '/matching',
		name: 'Matching: Finding all the patterns',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "matching" */ '@/views/pages/MatchingView')
	},
	{
		path: '/estimating',
		name: 'Estimating: How many guesses per match?',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "estimating" */ '@/views/pages/EstimatingView')
	},
	{
		path: '/searching',
		name: 'Searching: Calculating the overall guesses',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "searching" */ '@/views/pages/SearchingView')
	},
	{
		path: '/conclusion',
		name: 'Is Zxcvbn the solution to all our problems?',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "conclusion" */ '@/views/pages/ConclusionView')
	},
	{
		path: '/recommendation',
		name: 'How to keep your accounts secure',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "recommendation" */ '@/views/pages/RecommendationView')
	}

];

const router = new VueRouter({
	routes
});

export default router;

