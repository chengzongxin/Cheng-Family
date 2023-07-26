<template>
	<view class="container">
		<view class="avatar">
			<uni-id-pages-avatar class="avatar" width="150rpx" height="150rpx"></uni-id-pages-avatar>
		</view>
		<uni-list class="list">
			<uni-list-item class="item" @click="setNickname('')" title="昵称" :rightText="data.nickname||'未设置'" link>
			</uni-list-item>
		</uni-list>
		<uni-popup ref="dialog" type="dialog">
			<uni-popup-dialog mode="input" :value="data.nickname" @confirm="setNickname"
				:inputType="setNicknameIng?'nickname':'text'" title="设置昵称" placeholder="请输入要设置的昵称">
			</uni-popup-dialog>
		</uni-popup>
		
		
		<view class="bottomBar">
			<button v-if="hasData == false" @click="toLogin">登录</button>
			<button v-else @click="getUserInfo">更新个人信息</button>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const usersTable = db.collection('uni-id-users')
	const uniIdCo = uniCloud.importObject("uni-id-co")
	import {
		store,
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js'
	export default {
		data() {
			return {
				curpage: "forth",
				data: {
					nickname:''
				},
				hasData: false,
				setNicknameIng: false
			}
		},
		async mounted() {
			this.getUserInfo()
		},
		methods: {
			toLogin() {
				uni.navigateTo({
					url: `/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=%252Fpages%252F${this.curpage}%252F${this.curpage}`,
				})
			},
			async getUserInfo() {
				console.log("update")
				let res = await usersTable.where("'_id' == $cloudEnv_uid")
					.field('mobile,nickname,username,email,avatar_file')
					.get()
				
				// const realNameRes = await uniIdCo.getRealNameInfo()
				
				console.log('fromDbData', res.result.data);
				const data = res.result.data[0]
				if (data.nickname.length > 0) {
					this.data = data
					this.hasData = true
				}
			},
			setNickname(nickname) {
				if (nickname) {
					mutations.updateUserInfo({
						nickname
					})
					this.setNicknameIng = false
					this.$refs.dialog.close()
				} else {
					this.$refs.dialog.open()
				}
			},
		}
	}
</script>

<style>
	.avatar {
		margin-top: 100rpx;
		border-radius: 50%;
		/* width="260rpx" height="260rpx" */
	}
	.list {
		margin-top: 100rpx;
	}
	.container {
	}
	.bottomBar {
		margin-top: 100rpx;
/* 		left: 50%;
		bottom: 0;
		transform: translateX(-50%); */
	}
</style>