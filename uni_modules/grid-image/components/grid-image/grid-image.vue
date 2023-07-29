<template>
	<view class="imageList">
		<image v-for="item in imgs" :src="item" mode="aspectFill"></image>
	</view>
</template>


<script>
	export default {
		props: {
			imgs: {
				type: Array,
				default: new Array
			},
		},
	}
</script>


<style lang="scss">
	.imageList {
		display: flex;
		flex-wrap: wrap;
		image {
			margin: 5px;
			width: 200rpx;
			height: 200rpx;
			box-sizing: border-box;
		}
	}
</style>