const commoneUrl  = "http://localhost:5000"; //公共路径 
// const commoneUrl  = "http://106.52.220.47:8000"; //手机测试公共路径 
// const commoneUrl  = null; //公共路径 

const userId = uni.getStorageSync("user").id //用户id

//post请求封装
function postRequest(url,data,type){
	var promise = new Promise((resolve,reject) => {
		var postData = data;
		const that = this;
		uni.request({
			url:commoneUrl + url,
			data:postData,
			method:'POST',
			
			header:{
				'content-type': 'application/json',
				'token':uni.getStorageSync('token')//token可以不要，看后端
			},
				
			success:function(res){
				resolve(res.data);
				
			},
			fail:function(e)
			{
				reject('网络出错');
			}
		})
	});
	return promise;
}

//get请求封装
function getRequest(url,data,type){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"GET",
				dataType:'json',
				header:{
					'content-type':'application/json',
					'token':uni.getStorageSync('token')
				},
				success:function(res){
					resolve(res.data);	
				},
				fail:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//put请求封装
function putRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"PUT",
				dataType:'json',
				header:{
					'content-type': 'application/json',
					'token': uni.getStorageSync('token')
				},
				success:function(res){
					resolve(res.data);
				},
				fail:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
//del请求封装
function delRequest(url,data){
	var promise = new Promise((resolve,reject) => {
			var postData = data;
			uni.request({
				url:commoneUrl + url,
				data:postData,
				method:"DELETE",
				dataType:'json',
				header:{
					'content-type': 'application/json',
					'token': uni.getStorageSync('token')
				},
				success:function(res){
					resolve(res.data);
				},
				fail:function(e){
					reject('网络出错');
				}
			});
	});
	return promise;
}
module.exports = {
    post: postRequest,
    get: getRequest,
	put: putRequest,
	del: delRequest,
	ip: commoneUrl,
	userId : userId
};
