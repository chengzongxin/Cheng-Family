<template>
	<view>
		<view class="">
			<button type="default" v-if="noLogin" @click="toLogin">登录</button>
			<view v-else class="bottomBar">
				<button type="primary" @click="getUserInfo">更新个人信息</button>
				<button type="warn" @click="logout">退出</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.bottomBar {
		display: flex;
		margin-top: 1000rpx;
		justify-content: center;

		button {
			margin: 10px;
		}
	}
</style>