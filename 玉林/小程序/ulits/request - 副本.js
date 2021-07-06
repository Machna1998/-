// 封装网络请求
import config from "./config.js"

const http = (option = {}) => {
	let url=""
	let url1=config.url + option.url + "/gateway"; //登录的时候不需要传token
	let url2= config.url + option.url + "."+ option.token + "/gateway";  //其他的页面需要token
	option.url=="A1002" ? url=url1 :url=url2 
	// console.log(url);
	let zjhm = option.data.__openid;
	let dlfs = option.data.dlfs;
	let ybmapMessage = {
		"pwd": "",
		"flag": "1",
		"type": "01",
		"dlfs": dlfs || "09",
		"zjhm": zjhm
	};
	console.log(option);
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method: 'post',
			data: {
				centerId: "00077500", //中心码 公共
				state: "22", //渠道标识  公共
				buztype: option.data.buztype, //业务编码
				__openid: option.data.__openid, //身份证  公共
				ybmapMessage: JSON.stringify(ybmapMessage), //业务参数
				// grzh: option.data.grzh || "", //公积金账号
				certinum: option.data.__openid || "", //证件号码
				// ywmxlx:option.data.ywmxlx||"",
				// ispaging:option.data.ispaging||"",
				// begdate:option.data.begdate||"",//开始日期
				// enddate:option.data.enddate||"",//结束日期
				// pagenum:option.data.pagenum||"",
				// pagerows:option.data.pagerows||""
				// type:option.data.type||""
			},
			header: option.header|| {
				"content-type": "application/x-www-form-urlencoded; charset=utf-8"
			},
			success(res) {
				resolve(res)
				console.log(res);
			},
			error(err) {
				reject(err)
			}

		})
	})
}


export default http
