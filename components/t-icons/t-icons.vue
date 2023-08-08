<template>
	<!-- 前往查看具体样式 font/iconfont.css -->
	<text :class="name" class="iconfont" :style="{ color: color, 'font-size': iconSize }"></text>
</template>

<script>
	const getVal = (val) => {
		const reg = /^[0-9]*$/g
		return (typeof val === 'number' || reg.test(val)) ? val + 'px' : val;
	}
	export default {
		name: "t-icons",
		props: {
			name: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: '#333333'
			},
			size: {
				type: [Number, String],
				default: 16
			},

		},
		data() {
			return {

			};
		},
		computed: {
			iconSize() {
				return getVal(this.size)
			}
		},


	}
</script>

<style lang="scss">
	@import url('font/iconfont.css');
</style>