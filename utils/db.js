const db = uniCloud.database();
const dynamicTable = db.collection('user-dynamic')
import {
	date
} from "@/utils/date.js"
export const database = {
	dynamicList() {
		return new Promise((resolve, reject) => {
			dynamicTable.orderBy('create_at_time', 'desc').get().then((res) => {
				resolve(res)
			}).catch((e) => {
				console.log("database err:", e)
				reject(e)
			});
		})
	},
	/*
		title: 
		content:
		imgUrls:
	*/
	addDynamic(record) {
		return new Promise((resolve, reject) => {
			record.create_at = date.toString()
			record.create_at_time = date.timeStamp()
			dynamicTable.add(record).then((res) => {
				resolve(res)
			}).catch((e) => {
				console.log(e)
				reject(e)
			})
		})
	},
	// 清理全部数据
	async cleardynamicList() {
		let res = await dynamicTable.get()
		console.log("resdata:", res.result.data)
		res.result.data.map(async (document) => {
			return await dynamicTable.doc(document._id).remove();
		});
	}
}