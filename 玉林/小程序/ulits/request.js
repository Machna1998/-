// 封装网络请求
import config from "./config.js"

const http = (option = {}) => {
	const __token = uni.getStorageSync("__token")
	let url = ""
	let url1 = config.url + option.url + "/gateway"; //登录的时候不需要传token
	let url2 = config.url + option.url + "." + __token + "/gateway"; //其他的页面需要token
	// console.log(__token);
	// url = option.url=="A1002" ? url1: url2 
	option.url=="A1002" ? url=url1: url=url2
	console.log(url);
	// console.log(option.data.ybmapMessage);
	console.log(option);
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method: 'post',
			data: {
				centerId: "00077500", //中心码 公共
				state: "22", //渠道标识  公共
				buztype:option.data.buztype,
				__openid: option.data.__openid, //身份证  公共
				ybmapMessage: JSON.stringify(option.data.ybmapMessage), //业务参数A
				 ...option.data.part || {}

			},
			header: option.header || {
				"content-type": "application/x-www-form-urlencoded; charset=utf-8"
			},
			success(res) {
				resolve(res)
				console.log(res);
			},
			error(err) {
				reject(err)
				console.log(err);
			}

		})
	})
}


export default http
