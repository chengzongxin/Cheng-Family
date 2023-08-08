<template>
	<!-- 导航栏 -->
	<view :class="{ 't-navbar-fixed' : fixed, 't-navbar-shadow' : shadow , 't-navbar-border' : border}"
		:style="{ 'background-color': themeBgColor }" class="t-nav-bar">
		<!-- 状态栏 -->
		<t-status-bar minHeight="0" />
		<!-- 内容区域 -->
		<view class="t-nav-content">

			<!-- 返回按钮 -->
			<view class="t-nav-left" @click="clickLeft">
				<slot name="left">
					<t-icons name="icon-back" size="20" :color="themeColor"></t-icons>
					<text v-if="leftText.length" :style="{ color: themeColor, fontSize: '12px' }"
						class="t-nav-left-text">
						{{ leftText }}
					</text>
				</slot>
			</view>

			<!-- 标题 -->
			<view class="t-nav-title" @click="clickTitle">
				<slot>
					<text v-if="title.length" :style="{ color: themeColor, fontSize: '12px' }"
						class="t-nav-ellipsis">{{ title }}</text>
				</slot>
			</view>

			<!-- 右边按钮 -->
			<view class="t-nav-right" @click="clickRight">
				<slot name="right">
					<text v-if="rightText.length" :style="{ color: themeColor, fontSize: '12px' }"
						class="t-nav-right-text">{{ rightText }}</text>
				</slot>
			</view>

		</view>
	</view>
</template>

<script>
	import tStatusBar from "./t-status-bar.vue";
	export default {
		name: "t-nav-bar",
		components: {
			tStatusBar,
		},
		emits: ['clickLeft', 'clickTitle', 'clickRight'],
		props: {
			fixed: {
				type: Boolean,
				default: true
			},
			dark: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: false
			},
			disableAutoBack: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ""
			},
			leftText: {
				type: String,
				default: ""
			},
			rightText: {
				type: String,
				default: ""
			},
			leftIcon: {
				type: String,
				default: ""
			},
			rightIcon: {
				type: String,
				default: ""
			},
		},
		data() {
			return {

			};
		},
		computed: {
			themeBgColor() {
				if (this.dark) {
					// 默认值
					if (this.backgroundColor) {
						return this.backgroundColor
					} else {
						return this.dark ? '#333' : '#FFF'
					}
				}
				return this.backgroundColor || '#FFF'
			},
			themeColor() {
				if (this.dark) {
					// 默认值
					if (this.color) {
						return this.color
					} else {
						return this.dark ? '#fff' : '#333'
					}
				}
				return this.color || '#333'
			},
		},
		methods: {
			clickLeft(x) {
				this.$emit('clickLeft')
				if (this.disableAutoBack === false) {
					uni.navigateBack({
						delta: 1
					})
				}
			},
			clickTitle(x) {
				this.$emit('clickTitle')
			},
			clickRight(x) {
				this.$emit('clickRight')
			}
		},
	}
</script>

<style lang="scss" scoped>
	$nav-bar-height: 44px;

	// 吸顶
	.t-navbar-fixed {
		position: fixed;
		z-index: 998;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		/* #ifndef H5 */
		left: 0;
		right: 0;
		/* #endif */

	}

	// 阴影
	.t-navbar-shadow {
		box-shadow: 0 1px 6px #ccc;
	}

	// 边框
	.t-navbar-border {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #eee;
	}

	.t-nav-bar {
		box-sizing: border-box;
		background-color: skyblue;


		.t-nav-content {
			display: flex;
			justify-content: space-between;
			margin: 0 10px;
			text-align: center;
			height: $nav-bar-height;
			line-height: $nav-bar-height;

			.t-nav-left {
				display: flex;
				justify-content: start;
				width: 120rpx;

				&-text {
					display: block;
					height: $nav-bar-height;
					line-height: $nav-bar-height;
				}
			}

			.t-nav-right {
				display: flex;
				justify-content: space-around;
				width: 120rpx;

				&-text {
					display: block;
					height: $nav-bar-height;
					line-height: $nav-bar-height;
				}
			}

			.t-nav-title {
				// background-color: pink;
				flex: 1;
				padding: 0 20rpx;
				overflow: hidden;
				flex-grow: 1;
				flex-basis: 0;
				// flex-wrap: wrap;
				flex-shrink: 1;
				display: flex;
				flex-direction: column;


				.t-nav-ellipsis {
					// display: block;
					overflow: hidden;
					/* #ifndef APP-NVUE */
					white-space: nowrap;
					text-overflow: ellipsis;
					/* #endif */
					/* #ifdef APP-NVUE */
					lines: 1;
					text-overflow: ellipsis;
					/* #endif */
				}
			}


		}
	}
</style>