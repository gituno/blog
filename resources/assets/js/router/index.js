import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '~/store/index';
import routes from '~/router/routes';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.auth) {
		if (!store.getters.isLogin) {
			return next('/user/login');
		}
	}

	if (to.meta.guest) {
		if (store.getters.isLogin) {
			return next('/');
		}
	}

	return next();
});

export default router;