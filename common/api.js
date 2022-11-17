const commoneUrl  = "http://localhost:8080"; //公共路径 

const userId = uni.getStorageSync("user").id //用户id

//post请求封装
function postRequest(url,data,type){
	var promise = new Promise((resolve,reject) => {
		var postData = data;
		uni.request({
			url:commoneUrl + url,
			data:postData,
			method:'POST',
			// dataType:"jsonp",
			// jsonp:"callbackparam",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名
			// jsonpCallback:"success_jsonpCallback",

			header:{
				'content-type': type || 'application/json;charset=UTF-8',
				'token':uni.getStorageSync('token')//token可以不要，看后端
			}, 
				
			success:function(res){
				resolve(res.data);
				
			},
			error:function(e)
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
				header:{'content-type': type || 'application/json',
					'token':uni.getStorageSync('token')
				},
				success:function(res){
					resolve(res.data);
					
				},
				error:function(e)
				{
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
					
				},error:function(e){
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
				
				},error:function(e){
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
