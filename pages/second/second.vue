<template>
	<view>
		second page
		<view class="">
			<span class="icon iconfont icon-chucundingweiqi"></span>
			<span class="icon iconfont icon-xinhao"></span>
		</view>
	</view>
</template>

<script>
	import { date } from '@/utils/date.js'
	export default {
		data() {
			return {

			}
		},
		methods: {},
		mounted() {
			const d = date.toString()
			console.log(d,Date.now(),new Date().getTime())
			console.log(parseInt(Math.random()*10000))
			console.log(parseInt(Math.random()*10000))
			console.log(parseInt(Math.random()*10000))
			console.log(parseInt(Math.random()*10000))
			console.log(parseInt(Math.random()*10000))
			
			
		},
		onload() {
			console.log(123)
		}
	}
</script>

<style>

</style>