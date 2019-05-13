<template>
	<div class="overlay-layer" :class="{visible: visible}" @click="$emit('click')"></div>
</template>

<script>
	export default {
		props: {
			visible: {
				type: Boolean,
				default() {
					return false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.overlay-layer {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		opacity: 0;
		visibility: hidden;
		transition: all 0.6s ease 0s;

		&.visible {
			opacity: 1;
			visibility: visible;
		}
	}
</style>