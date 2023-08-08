<template>
	<view :style="{ height: statusBarHeight }" class="t-status-bar">
		<slot />
	</view>
</template>

<script>
	const getVal = (val) => {
		const reg = /^[0-9]*$/g
		return (typeof val === 'number' || reg.test(val)) ? val + 'px' : val;
	}
	export default {
		name: 'TStatusBar',
		props: {
			minHeight: {
				type: [Number, String],
				default: 0
			},
		},
		data() {
			return {
				statusBarHeight: 20
			}
		},
		mounted() {
			if (uni.getSystemInfoSync().statusBarHeight >= this.minHeight) {
				this.statusBarHeight = getVal(uni.getSystemInfoSync().statusBarHeight)
			} else {
				this.statusBarHeight = getVal(this.minHeight)
			}
		}
	}
</script>

<style lang="scss">
	.t-status-bar {
		// width: 750rpx;
		height: 20px;
		// height: var(--status-bar-height);
		// background-color: orange;
	}
</style>