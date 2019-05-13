import Vue from 'vue';
import VueCookie from 'vue-cookie';
import axios from 'axios';
import router from '~/router/index'
import store from '~/store/index';
import App from '~/components/App';

Vue.use(VueCookie);

Vue.prototype.$http = axios;

const app = new Vue({
	router,
	render: h => h(App),
	store
}).$mount('#app');