<template>
	<header class="app-header">
		<app-logo></app-logo>

		<div class="icon-list">
			<div class="search-button">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.05 287.05" width="17" height="18"><g><g><path class="cls-1" d="M114.63,229.25A114.63,114.63,0,1,1,229.25,114.63,114.76,114.76,0,0,1,114.63,229.25Zm0-184.25a69.63,69.63,0,1,0,69.63,69.63A69.7,69.7,0,0,0,114.63,45Z"/><path class="cls-1" d="M200.53,177.93h48.19a0,0,0,0,1,0,0V280a11.36,11.36,0,0,1-11.36,11.36H211.89A11.36,11.36,0,0,1,200.53,280v-102a0,0,0,0,1,0,0Z" transform="translate(-100.11 227.56) rotate(-45)"/></g></g></svg>
			</div>
			<div class="guide-button" @click="guide">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.77 212.6" width="18" height="17"><g><g><rect class="cls-1" width="226.77" height="42.52" rx="14.45" ry="14.45"/><rect class="cls-1" y="85.04" width="226.77" height="42.52" rx="14.45" ry="14.45"/><rect class="cls-1" y="170.08" width="226.77" height="42.52" rx="14.45" ry="14.45"/></g></g></svg>
			</div>
		</div>
 	</header>
</template>

<script>
	import AppLogo from '~/components/app/logo';

	export default {
		components: {
			AppLogo
		},
		methods: {
			guide() {
				this.$store.dispatch('openGuide');
			}
		}
	}
</script>

<style lang="scss">
	.app-header {
		position: fixed;	
		top: 0;	
		left: 0;
		width: 100%;
		height: 64px;
		background-color: #fff;
		padding: 0 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 4px 8px -3px rgba(17, 17, 17, .06);
		z-index: 999;

		.icon-list {
			display: flex;
		}

		.search-button {
			margin-right: 30px;

			.cls-1 {
				fill:#899097;
			}
		}

		.guide-button {
			cursor: pointer;

			.cls-1 {
				fill:#899097;
			}
		}
	}
</style>