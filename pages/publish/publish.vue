<template>
	<view class="container">
		<button v-if="!hasImg" type="primary" @click="chooseImg">+</button>
		<grid-image :imgs="imgs"></grid-image>
		<input focus type="text" v-model="title" placeholder="请输入标题">
		<textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
	</view>
</template>

<script>
	import { store } from "@/uni_modules/uni-id-pages/common/store.js"
	import { database } from "@/utils/db.js";
	import { date } from "@/utils/date.js"
	
	const db = uniCloud.database();
	// 获取名为 `table1` 数据表的引用
	const userDynamicTable = db.collection('user-dynamic');
	export default {
		data() {
			return {
				title: '',
				content:'',
				imgs: [],
				hasData: false
			}
		},
		computed: {
			hasImg() {
				console.log(Date.now())
				return this.hasData
			}
		},
		onLoad(e) {
			this.getOpenerEventChannel().emit('publish',false)
		},
		methods: {
			onNavigationBarButtonTap(e) {
				console.log("imgs:", this.imgs)
				let imgUrls = []
				uni.showLoading({
					title: "更新中",
					mask: true
				});
				this.imgs.forEach((img) => {
					console.log(img)
					uniCloud.uploadFile({
						filePath: img,
						fileType: "image",
						cloudPathAsRealPath: true,
						cloudPath: "pic/" + Date.now() + parseInt(Math.random()*10000),
						success: (res) => {
							console.log('上传成功', res);
							imgUrls.push(res.fileID)
							console.log("length: ",imgUrls.length,this.imgs.length)
							if (imgUrls.length === this.imgs.length) {
								console.log("imgUrls:", imgUrls)
								this.uploadwork(imgUrls)
							}
						},
						fail: (err) => {
							console.log('上传失败', err);
						}
					})
				});

				uni.hideLoading()
			},
			async uploadwork(imgs) {
					console.log(imgs)
					// 单条插入数据
					const dynamic = {
						title: this.title,
						content: this.content,
						create_at: date.toString(),
						create_at_time: date.timeStamp(),
						// uid:$cloudEnv_uid,
						imgUrls:imgs
					}
					const res = await database.addDynamic(dynamic)
					console.log("addDynamic res:",res)
					if (res.success == true) {
						uni.showToast({
							title:"发布成功！"
						})
						this.getOpenerEventChannel().emit('publish',true)
						uni.navigateBack()
					}
			},
			chooseImg() {
				console.log(this.title)
				uni.chooseImage({
					complete: (res) => {
						console.log(res.tempFilePaths)
						this.imgs = res.tempFilePaths
						this.hasData = true
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 20px;
		
		button {
			width: 100px;
			height: 100px;
			line-height: 100px;
			font-size: 40px;
			margin-top: 20px;
			margin-left: 0px;
		}
		
		input {
			background-color: $backgroundLight-color;		
			margin-top: 20px;
		}
		
		textarea {
			margin-top: 20px;
			background-color: $backgroundGray-color;
		}
	}
</style>