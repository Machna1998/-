<template>
	<view class="con">
		<u-field v-model="name" label="姓名" placeholder="请填写姓名" required>
		</u-field>

		<u-field v-model="sfzm" label="身份证号" placeholder="请填写身份证号" required>
		</u-field>
		<u-button type="primary" @click="login()">身份验证</u-button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				name: '吕彪', //姓名
				sfzm: '452527196107042519', //身份证
			}
		},
		methods: {
			// 登录的时候请求后台数据
			async getUser() {
				let option={
					url:"A1002",
					data:{
							__openid: this.sfzm,
							buztype: "5432",
							ybmapMessage:{
								pwd:"",
								flag:"1",
								type:"01",
								"dlfs":"09",
								zjhm:this.sfzm
							},
							
					}
				}
				let res =await this.$http(option)
				uni.setStorageSync("accnum",res.data.accnum)//grzh
				uni.setStorageSync("__token",res.data.__token)
				uni.setStorageSync("name",res.data.username)
				uni.setStorageSync("jtzz",res.data.jtzz) //家庭住址
				uni.setStorageSync("yzbm",res.data.yzbm) //邮政编码
				uni.setStorageSync("jtysr",res.data.jtysr)//家庭月收入
				uni.setStorageSync("gddhhm",res.data.gddhhm)//固定电话号码
				uni.setStorageSync("zhiye",res.data.zhiye)//职业
				uni.setStorageSync("zhichen",res.data.zhichen)//职称
				uni.setStorageSync("zhiwu",res.data.zhiwu)//职务
				uni.setStorageSync("xueli",res.data.xueli)//固定电话号码
				uni.setStorageSync("hyzk",res.data.hyzk)//婚姻状况
				uni.setStorageSync("all",res.data)//全部内容
				
				
				
				// console.log(res);
			},
			login() {
				// 调用tips里面的效验身份证函数
				// let test = this.$tips.sfz(sfzm)
				// 对姓名和身份证号进行判断
				let self = this;
				if (self.name == "" || self.name.length == 1) {
					self.$tips.showtoast("请输入正确姓名")
				}
				//  else if (test == false) {
				// 	 this.$tips.showtoast("请输入正确身份证")
				// } 
				else {
					uni.setStorageSync("sfzm",this.sfzm)
					// 不刷脸
					this.getUser()
					uni.reLaunch({
						url: "../../pagesA/service/service"
					})


					// 刷脸使用
					// wx.startFacialRecognitionVerify({
					// 	name: self.name,
					// 	idCardNumber: self.sfzm,
					// 	success(res) {
					// 		// 获取后台数据并把值传递个后端
					// 		self.getUser()
					// 		// 跳转页面
					// 		uni.reLaunch({
					// 			url: "../../pagesA/service/service"
					// 		})
					// 		console.log("成功");
					// 	},
					// 	fail(res) {
					// 		const verifyResult = res.verifyResult;
					// 		self.$tips.showtoast("刷脸失败！请重试")
					// 	}
					// })
				}
			}
		}
	}
</script>

<style>

</style>
