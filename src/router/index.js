import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Start',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "start" */ '@/views/home/StartView')
	},
	{
		path: '/password-policies',
		name: 'Sign up please',
		component: () =>
			import(
				/* webpackChunkName: "password-policies" */ '@/views/pages/PasswordPoliciesView'
			)
	},
	{
		path: '/password-attacks',
		name: 'How attackers steal your password',
		component: () =>
			import(
				/* webpackChunkName: "password-attacks" */ '@/views/pages/PasswordAttacksView'
			)
	},
	{
		path: '/password-strength-estimation',
		name: 'How password strength is calculated',
		component: () =>
			import(
				/* webpackChunkName: "password-strength-estimation" */ '@/views/pages/PasswordStrengthEstimationView'
			)
	},
	{
		path: '/cracking-time-calculation',
		name: 'How long does it take to crack a password?',
		component: () =>
			import(
				/* webpackChunkName: "cracking-time-calculation" */ '@/views/pages/CrackingTimeCalculationView'
			)
	},
	{
		path: '/zxcvbn',
		name: 'What is Zxcvbn?',
		component: () =>
			import(/* webpackChunkName: "zxcvbn" */ '@/views/pages/ZxcvbnView')
	},
	{
		path: '/matching',
		name: 'Matching: Finding all the patterns',
		component: () =>
			import(/* webpackChunkName: "matching" */ '@/views/pages/MatchingView')
	},
	{
		path: '/estimating',
		name: 'Estimating: How many guesses per match?',
		component: () =>
			import(
				/* webpackChunkName: "estimating" */ '@/views/pages/EstimatingView'
			)
	},
	{
		path: '/searching',
		name: 'Searching: Calculating the overall guesses',
		component: () =>
			import(/* webpackChunkName: "searching" */ '@/views/pages/SearchingView')
	},
	{
		path: '/conclusion',
		name: 'Is Zxcvbn the solution to all our problems?',
		component: () =>
			import(
				/* webpackChunkName: "conclusion" */ '@/views/pages/ConclusionView'
			)
	},
	{
		path: '/recommendation',
		name: 'How to keep your accounts secure',
		component: () =>
			import(
				/* webpackChunkName: "recommendation" */ '@/views/pages/RecommendationView'
			)
	}
];

const router = new VueRouter({
	routes
});

export default router;
