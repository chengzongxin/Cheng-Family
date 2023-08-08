<template>
	<view>
		second page
		<view class="">
			<view>t-icons</view>
			<t-icons name="icon-back"></t-icons>
			<t-icons name="icon-food-chips"></t-icons>
			<view>iconfont</view>
			<span class="icon iconfont icon-chucundingweiqi"></span>
			<span class="icon iconfont icon-xinhao"></span>
			<button type="default" @click="getDynamic"> dynamic </button>

			<view class="" v-for="(item,index) in list" :key="index">
				<text>{{item.title}}</text>
				<!-- <image :src=item.imgUrls[0] mode=""></image> -->
				<image :src=img mode="" v-for="(img,index) in item.imgUrls" :key="index"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		date
	} from '@/utils/date.js'
	export default {
		data() {
			return {
				list: []
			}
		},
		methods: {
			async getDynamic() {

				const res = await uniCloud.callFunction({
					name: "myCloudFunc",
					data: {
						page: 1,
						size: 20
					}
				})


				console.log(res.result)
				this.list = res.result.data
			}
		},
		async mounted() {
			// const d = date.toString()
			// console.log(d,Date.now(),new Date().getTime())


			// console.log("123")
			// const res = await this.$myRequest({
			// 	url: '/frameworks'
			// })
			// console.log(res)

			// uniCloud.callFunction({
			// 	name: "myCloudFunc"
			// }).then(res => {
			// 	console.log("myCloudFunc:",res);
			// })


		},
		onload() {}
	}
</script>

<style>
	text {
		font-size: 30px;
		line-height: 60px;
	}
</style>