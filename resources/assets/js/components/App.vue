<template>
	<div id="app">
		<app-header></app-header>
		<app-guide></app-guide>
		<main class="content">
			<router-view></router-view>	
		</main>
	</div>
</template>

<script>
	import AppHeader from './layouts/Header';
	import AppGuide from './layouts/Guide';

	export default {
		components: {
			AppHeader, AppGuide
		},
		updated() {
			this.$store.dispatch('closeGuide');
		},
		mounted() {
			this.$http.defaults.headers.common['Authorization'] = `Bearer ${this.$store.getters.authToken}`;
		}
	}
</script>

<style lang="scss">
	.content {
		padding: 94px 30px 30px;
	}
</style>