<template>
	<form class="form-container" @submit.prevent="register"> 
		<h3 class="form-title">회원가입</h3>
		<div class="form-group">
			<label for="email" class="form-label">이름</label>
			<input type="text" id="email" class="form-input" v-model="form.name" placeholder="example@example.com">
		</div>
		<div class="form-group">
			<label for="email" class="form-label">이메일</label>
			<input type="text" id="email" class="form-input" v-model="form.email" placeholder="example@example.com">
		</div>
		<div class="form-group">
			<label for="password" class="form-label">비밀번호</label>
			<input type="password" id="password" class="form-input" v-model="form.password" placeholder="Password">
		</div>
		<div class="form-group">
			<label for="password_confirm" class="form-label">비밀번호 확인</label>
			<input type="password" id="password_confirm" class="form-input" v-model="form.password_confirmation" placeholder="Password Confirm">
		</div>
		<button type="submit" class="form-btn">회원가입</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					email: "",
					password: "",
					password_confirmation: ""
				}
			}
		},
		methods: {
			register() {
				this.$store.dispatch('register', this.form)
				.then(() => {
					this.$router.push('/user/login')
				})
				.catch((err) => {
					console.log(err)
				});
			}
		}
	}
</script>

<style src="./user.scss"></style>