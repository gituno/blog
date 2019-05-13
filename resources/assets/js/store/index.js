import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		auth: require('~/store/modules/auth').default,
		guide: require('~/store/modules/guide').default
	},
	plugins: [],
	strict: true
});