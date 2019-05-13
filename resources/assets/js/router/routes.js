export default [
	{
		path: '/user/login',
		name: 'user.login',
		component: require('~/views/user/login'),
		meta: {
			guest: true
		}
	},
	{
		path: '/user/register',
		name: 'user.register',
		component: require('~/views/user/register'),
		meta: {
			guest: true
		}
	}
];