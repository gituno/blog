export default {
	state: {
		openGuide: false
	},
	mutations: {
		openGuide(state) {
			state.openGuide = true;
		},
		closeGuide(state) {
			state.openGuide = false;
		}
	},
	actions: {
		openGuide(context) {
			context.commit('openGuide');
		},
		closeGuide(context) {
			context.commit('closeGuide');
		}
	},
	getters: {
		isOpenGuide(state) {
			return state.openGuide;
		}
	}
}