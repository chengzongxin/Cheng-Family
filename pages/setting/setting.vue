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
	import { store } from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	const usersTable = db.collection('uni-id-users')
	export default {
		data() {
			return {
				data: null
			}
		},
		computed:{
			noLogin(){
				return !store.hasLogin
			}
		},
		methods: {

			async getUserInfo() {
				console.log("update")
				let res = await usersTable.where("'_id' == $cloudEnv_uid")
					.field('mobile,nickname,username,email,avatar_file')
					.get()

				// const realNameRes = await uniIdCo.getRealNameInfo()

				console.log('fromDbData', res.result.data)
				uni.showToast({
					title: JSON.stringify(res.result.data),
					icon: 'none',
					duration: 10000
				})
				const data = res.result.data[0]
				if (data.nickname.length > 0) {
					this.data = data
				}
			},
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