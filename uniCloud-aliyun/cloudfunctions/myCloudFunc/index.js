'use strict';

const db = uniCloud.database()


exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const { page, size } = event
	
	//返回数据给客户端
	const result = await db.collection("user-dynamic").limit(size).get()
	return result
	// return "hello my clound func"
};
