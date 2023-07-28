<template>
	<view class="content">
		
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="swiper-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">指示点</view>
				<switch :checked="indicatorDots" @change="changeIndicatorDots" />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">自动播放</view>
				<switch :checked="autoplay" @change="changeAutoplay" />
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-common-mt">
				<text>幻灯片切换时长(ms)</text>
				<text class="info">{{duration}}</text>
			</view>
			<slider @change="durationChange" :value="duration" min="500" max="2000" />
			<view class="uni-common-mt">
				<text>自动播放间隔时长(ms)</text>
				<text class="info">{{interval}}</text>
			</view>
			<slider @change="intervalChange" :value="interval" min="2000" max="10000" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		async onLoad() {
			console.log('index onLoad..')
			console.log(this.$appName)

			const res = await this.$myRequest({
				url: '/frameworks'
			})
			console.log(res)
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}

	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}

	.info {
		position: absolute;
		right: 20rpx;
	}

	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
	.uni-bg-red {
		background-color: red;
	}
	.uni-bg-green {
		background-color: green;
	}
	.uni-bg-blue {
		background-color: blue;
	}
</style>