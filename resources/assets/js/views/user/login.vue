<template>
	<form class="form-container" @submit.prevent="login"> 
		<h3 class="form-title">로그인</h3>
		<div class="form-group">
			<label for="email" class="form-label">이메일</label>
			<input type="text" id="email" class="form-input" v-model="form.email" placeholder="example@example.com">
		</div>
		<div class="form-group">
			<label for="password" class="form-label">비밀번호</label>
			<input type="password" id="password" class="form-input" v-model="form.password" placeholder="Password">
		</div>
		<button type="submit" class="form-btn">로그인</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: "",
					password: ""
				}
			}
		},
		methods: {
			login() {
				this.$store.dispatch('login', this.form)
				.then(() => {
					this.$router.push('/')
				})
				.catch((err) => {
					console.log(err)
				});
			}
		}
	}
</script>

<style src="./user.scss"></style>