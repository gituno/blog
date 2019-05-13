<template>
	<button class="app-btn" :type="type" :color="color" :size="size" @click="$emit('click')">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		props: {
			color: {
				type: String,
				default() {
					return 'white';
				}
			},
			type: {
				type: String,
				default() {
					return 'button'
				}
			},
			size: {
				type: String,
				default() {
					return 'normal'
				}
			}
		}
	}
</script>

<style lang="scss">
	.app-btn {
		padding: 8px 12px;
		color: #fff;
		border-radius: 3px;
		border-width: 2px;
		border-style: solid;
		font-size: 14px;

		&[color="blue"] {
			border-color: #007bfd;
			background-color: #007bfd;
			box-shadow: 0 5px 10px rgba(0, 127, 254, 0.2);
		}

		&[color="red"] {
			border-color: #f83051;
			background-color: #f83051;
			box-shadow: 0 5px 10px rgba(248, 48, 81, 0.2);
		}

		&[size="small"] {
			font-size: 12px;
		}
	}
</style>