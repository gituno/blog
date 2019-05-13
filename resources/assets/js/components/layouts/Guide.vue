<template>
	<div class="guide" :opened="isOpenGuide">
		<aside class="app-aside">
			<div class="guide-header">
				<div class="guide-menu">
					<app-logo></app-logo>
				</div>
			</div>
			<div class="guide-menus">
				<div class="guide-title guide-menu">
					카테고리
				</div>
				<template v-for="category in categorys">
					<div class="guide-menu">
						{{category.name}} <span class="cnt">({{category.count}})</span>
					</div>
				</template>
			</div>
			<div class="guide-menus">
				<div class="guide-title guide-menu">
					관련 포스트
				</div>
			</div>
			<div class="guide-menus">
				<div class="guide-title guide-menu">
					사이트 관리
				</div>
				<div class="guide-menu">
					<router-link to="/user/login" v-if="!isLogin" style="margin-right: 10px;">
						<app-button color="red" size="small">로그인</app-button>
					</router-link>
					<router-link to="/user/register" v-if="!isLogin" style="margin-right: 10px;">
						<app-button color="red" size="small">회원가입</app-button>
					</router-link>
					<app-button color="red" size="small" v-if="isLogin" @click="logout">로그아웃</app-button>
				</div>
			</div>
		</aside>
		<app-overlay :visible="isOpenGuide" @click="close">
		</app-overlay>
	</div>
</template>

<script>
	import AppOverlay from '~/components/app/overlay';
	import AppLogo from '~/components/app/logo';
	import AppButton from '~/components/app/button';
	import {mapGetters} from 'vuex';

	export default {
		data() {
			return {
				categorys: [
					{
						name: 'HTML',
						count: 4
					},
					{
						name: 'CSS',
						count: 2
					},
					{
						name: 'Javascript',
						count: 4
					}
				]
			}
		},
		components: {
			AppOverlay, AppLogo, AppButton
		},
		computed: {
			...mapGetters([
				'isOpenGuide', 'isLogin', 'authUser'
			])
		},
		methods: {
			close() {
				this.$store.dispatch('closeGuide');
			},
			logout() {
				this.$store.dispatch('logout')
				.then(() => {
					this.$router.push('/');
				});
			}
		}
	}
</script>

<style lang="scss">
	.guide {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		visibility: hidden;
		z-index: 1000;

		&[opened="true"] {
			visibility: visible;

			.app-aside {
				right: 0;
			}
		}

		.app-aside {
			position: absolute;
			top: 0;
			right: -320px;
			width: 320px;
			height: 100%;
			box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px 0px;
			background-color: #fff;
			border-right: 1px solid rgb(233, 233, 233);
			overflow-y: auto;
			transition: all 0.6s ease 0s;
			z-index: 10;

			.guide-header {
				padding: 10px 0;
				border-bottom: 1px solid rgb(233, 239, 244);

				.guide-menu {
					height: 50px;
					margin-left: 0;
					color: rgb(245, 91, 115);
				}
			}

			.guide-menus {
				padding: 20px 0;
				border-bottom: 1px solid rgb(233, 239, 244);
			}

			.guide-menu {
				height: 40px;
				display: flex;
				align-items: center;
				color: rgb(94, 94, 94);
				font-size: 14px;
				padding: 0 40px;

				&.guide-title {
					font-size: 20px;
					font-weight: 700;
					color: #232323;
				}

				.cnt {
					margin-left: 5px;
					font-size: 10px;
					color: #aaa;
				}
			}
		}
	}
</style>