<template>
	<view>
		<button @click="toLogin">登录</button>
	</view>
</template>

<script>
// import { login } from '../../uni_modules/uni-id-pages/uniCloud/cloudfunctions/uni-id-co/index.obj'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url:'/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=%252Fpages%252Findex%252Findex',
				})
			}
		}
	}
</script>

<style>

</style>
