<template>
	<view class="feed-container">
		<view class="feed-content" v-for="item in feeds">
			<text class="feed-title"> {{item.title}}</text>
			<text class="feed-subtitle"> {{item.content}}</text>
			<grid-image :imgs="item.imgUrls"></grid-image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			feeds: {
				type: Array,
				default: new Array
			},
		},
		emit: ['']
	}
</script>

<style lang="scss">
	.feed-container {
		.feed-content {
			margin: 0 20px 44px 20px;
			.feed-title {
				display: block;
				font-size: 20px;
				font-weight: 700;
			}
			.feed-subtitle {
				margin-top: 10px;
				display: block;
				font-size: 16px;
				font-weight: 400;
			}
		}
	}
</style>
