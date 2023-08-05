<template>
	<div class="container">
		<view class="publish">
			<view class="box" v-for="(item,index) in files" :key="index">
				<image :src=item.path mode="aspectFill"></image>
				<view class="close" @click="remove(index)">x</view>
				<view class="info">{{getFormatSize(item.size)}}</view>
			</view>
			<view class="box add" @click="chooseImg">+</view>
		</view>
		<button type="primary" @click="onCommit" size="default">提交</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				files:[],
			}
		},
		computed: {
			
		},
		methods: {
			getFormatSize(size){
				if (size < 1024) {
					return size + 'B'
				} else if (size < 1024 * 1024){
					return (size / 1024.0).toFixed(1) + 'KB'
				} else {
					return (size / 1024.0 / 1024.0).toFixed(1) + 'M'
				}
			},
			chooseImg(e){
				console.log(e);
				uni.chooseImage({
					success: (res) => {
						console.log(res);
						this.files = [...this.files,...res.tempFiles]
					}
				})
			},
			remove(idx){
				console.log(idx);
				this.files.splice(idx,1)
			},
			onCommit(){
				uniCloud.uploadFile({
					filePath:this.files[0].path,
					cloudPath: "pic/" + Date.now() + parseInt(Math.random()*10000) + '.jpg',
					cloudPathAsRealPath: true,
					success: (res) => {
						console.log('上传成功', res);
						// imgUrls.push(res.fileID)
						// console.log("length: ",imgUrls.length,this.imgs.length)
						// if (imgUrls.length === this.imgs.length) {
						// 	console.log("imgUrls:", imgUrls)
						// 	this.uploadwork(imgUrls)
						// }
					},
					fail: (err) => {
						console.log('上传失败', err);
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20rpx;
	}
	.publish {
		display: flex;
		flex-wrap: wrap;
		
		.box {
			background-color: greenyellow;
			width: 230rpx;
			height: 230rpx;
			margin-right: 10rpx;
			margin-bottom: 10rpx;
			position: relative;
			image {
				width: 100%;
				height: 100%;
			}
			// 去除第三个右边距，以免掉下来
			&:nth-child(3n) {
				margin-right: 0rpx;
			}
			.close {
				display: flex;
				justify-content: space-around;
				background-color: orange;
				position: absolute;
				right: 0;
				top: 0;
				width: 50rpx;
				height: 50rpx;
				background: rgba(0, 0, 0, 0.6);
				color: white;
				border-radius: 0 0 0 50rpx;
			}
			.info {
				position: absolute;
				bottom: 0;
				right: 0;
				color: white;
				width: 100%;
				height: 20px;
				background-color: rgba(0, 0, 0, 0.6);
			}
		}
		.add {
			font-size: 40rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
