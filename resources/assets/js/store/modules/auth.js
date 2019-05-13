import axios from 'axios';

export default {
	state: {
		status: null,
		token: localStorage.getItem('token') || null,
		user: localStorage.getItem('user') || {}
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading';
		},
		auth_success(state, token, user) {
			state.status = 'success';
			if (token) state.token = token;
			if (user) state.user = user;
		},
		auth_error(state) {
			state.status = 'error';
		},
		logout(state) {
			state.status = null;
			state.token = null;
		}
	},
	actions: {
		register({commit}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request');

				axios
					.post('http://blog.dailyuno.com/api/user/register', user)
					.then((resp) => {
						commit('auth_success');
						resolve(resp);
					})
					.catch((err) => {
						commit('auth_error');
						reject(err);
					});
			});
		},
		login({commit}, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request');

				axios
					.post('http://blog.dailyuno.com/api/user/login', user)
					.then((resp) => {
						const token = resp.data.token;
						const user = resp.data.user;
						localStorage.setItem('user', JSON.stringify(user));
						localStorage.setItem('token', token);
						axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
						commit('auth_success', token, user);
						resolve(resp);
					})
					.catch((err) => {
						commit('auth_error');
						localStorage.removeItem('user');
						localStorage.removeItem('token');
						reject(err);
					});
			});
		},
		logout({commit}) {
			localStorage.removeItem('user');
			localStorage.removeItem('token');

			return new Promise((resolve, reject) => {
				axios
					.post('http://blog.dailyuno.com/api/user/logout')
					.then((resp) => {
						commit('logout');
						delete axios.defaults.headers.common['Authorization'];
						resolve();
					})
					.catch((err) => {
						commit('auth_error');
						reject(err);
					});
			});
		}
	},
	getters: {
		isLogin: state => !!state.token,
		authToken: state => state.token,
		authUser: state => state.user ? JSON.parse(state.user) : state.user,
		authStatus: state => state.status
	}
}