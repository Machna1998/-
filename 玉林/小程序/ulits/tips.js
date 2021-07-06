// 封装一些提示框
const showlode = (title = "") => {
	uni.showLoading({
		title
	})
}

const hidelode = () => {
	uni.hideLoading()
}

const showtoast = (title = "", icon = "none") => {
	uni.showToast({
		title,
		icon
	})
}

const sfz=function verifyID(idcode) {
	// 加权因子
	var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
	// 校验码
	var check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
	var code = idcode + "";
	var last = idcode[17]; //最后一位
	var seventeen = code.substring(0, 17);
	// ISO 7064:1983.MOD 11-2
	// 判断最后一位校验码是否正确
	console.log(seventeen);
	var arr = seventeen.split("");
	console.log(arr);
	var len = arr.length;
	var num = 0;
	for (var i = 0; i < len; i++) {
		num = num + arr[i] * weight_factor[i];
	}
	// 获取余数
	var resisue = num % 11;
	var last_no = check_code[resisue];
	var idcard_patter =
		/^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

	// 判断格式是否正确
	var format = idcard_patter.test(idcode);

	// 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
	return last === last_no & format ? true : false;
}



export default {
	showlode,
	hidelode,
	showtoast,
	sfz
}
