<template>
	<view>
		<button v-if="!hasImg" type="primary" @click="chooseImg">+</button>
		<view class="imageList">
			<image v-for="item in imgs" :src="item" mode=""></image>
		</view>
		<input focus type="text" v-model="title" placeholder="请输入标题">
		<textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
		<image src="https://mp-f03fb0ab-2438-4197-be6d-9c6d1101d525.cdn.bspapp.com/pic/1690567551255.jpg" mode=""></image>
		<button type="warn" @click="clearAllData">清理所有数据</button>
	</view>
</template>

<script>
	import { store } from "@/uni_modules/uni-id-pages/common/store.js"
	
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
		async mounted() {
			let res = await userDynamicTable.get()
			this.imgs = res.result.data[0].imgUrls
			console.log("this.imgs：",this.imgs)
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
						cloudPath: "pic/" + Date.now(),
						success: (res) => {
							console.log('上传成功', res);
							imgUrls.push(res.fileID + '.jpg')
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
					// const usersTable = db.collection('uni-id-users');
					// userDynamicTable.get().then((res) => {
					// 	// res 为数据库查询结果
					// 	console.log(res)
					// }).catch((e) => {
					// 	console.log(e)
					// });
					
					
					
					// 单条插入数据
					let res = await userDynamicTable.add({
						title: this.title,
						content: this.content,
						// uid:$cloudEnv_uid,
						imgUrls:imgs
					})
					console.log("res:",res)
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
			},
			async clearAllData(){
					// 清理全部数据
					let res = await userDynamicTable.get()
					console.log("resdata:",res.result.data)
					res.result.data.map(async(document) => {
					  return await userDynamicTable.doc(document._id).remove();
					});
			}
		}
	}
</script>

<style lang="scss">
	button {
		width: 100px;
		height: 100px;
		line-height: 100px;
		font-size: 40px;
		margin-top: 20px;
		margin-left: 20px;
	}

	input {
		margin: 20px;
		background-color: $backgroundLight-color;
	}

	.imageList {
		display: flex;
		flex-wrap: wrap;
		margin: 0 20px;

		image {
			margin: 5px;
			width: 200rpx;
			height: 200rpx;
		}
	}

	textarea {
		margin-left: 20px;
		background-color: $backgroundGray-color;
	}
</style>