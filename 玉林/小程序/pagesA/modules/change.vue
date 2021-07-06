<template>
	<view class="change">

		<u-cell-group>
			<u-cell-item title="个人账号" :value=grzh :arrow="false"></u-cell-item>
			<u-cell-item title="姓名" :value=name :arrow="false"></u-cell-item>
			<u-cell-item title="证件类型" :value=zjlx :arrow="false"></u-cell-item>
			<u-cell-item title="证件号码" :value=zjhm :arrow="false"></u-cell-item>
		</u-cell-group>
		<!-- 	<p>个人变更信息</p>
		<u-field v-model="name"  placeholder="请填输入家庭住址" required input-align="right"></u-field>
		<u-field v-model="name" label="邮政编码" placeholder="请输入邮政编码" required input-align="right"></u-field>
		<u-field v-model="name" label="家庭月收入"  required input-align="right"></u-field>
		<u-field v-model="name" label="固定号码" placeholder="请输入固定电话号码" required input-align="right"></u-field>
		<u-field v-model="name" label="职业" :type="select" required input-align="right"></u-field>
		<u-field v-model="name" label="职称" placeholder="请填写姓名" required input-align="right"></u-field>
		<u-field v-model="name" label="职务" placeholder="请填写姓名" required input-align="right"></u-field>
		<u-field v-model="name" label="学历" placeholder="请填写姓名" required input-align="right"></u-field>
		<u-field v-model="name" label="婚姻状况" placeholder="请填写姓名" required input-align="right"></u-field>
		 -->
		<u-form :model="form" ref="uForm" class="one">
			<p>个人变更信息</p>

			<u-form-item :required="true" label="家庭住址" label-width="150">
				<u-input v-model="form.jtzz" placeholder="请输入家庭住址" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item :required="true" label="邮政编码" label-width="150">
				<u-input v-model="form.yzbm" placeholder="请输入邮政编码" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item :required="true" label="家庭月收入" label-width="180">
				<u-input v-model="form.jtysr" placeholder="请输入家庭月收入" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="固定电话号码" label-width="220">
				<u-input v-model="form.gddhhm" placeholder="请输入固定电话号码" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="职业" :required="true" label-width="150">
				<u-input v-model="form.zhiye" type="select" slot='right' @click="show = true" />
				<u-select v-model="show" mode="single-column" :list="occupation" @confirm="xgzy()"></u-select>
			</u-form-item>
			<u-form-item label="职称" :required="true" label-width="150">
				<u-input v-model="form.zhichen" type="select" slot='right' @click="show1 = true" />
				<u-select v-model="show1" mode="single-column" :list="techpost" @confirm="xgzc()"></u-select>
			</u-form-item>
			<u-form-item label="职务" :required="true" label-width="150">
				<u-input v-model="form.zhiwu" type="select" slot='right' @click="show2 = true" />
				<u-select v-model="show2" mode="single-column" :list="headship" @confirm="xgzw()"></u-select>
			</u-form-item>
			<u-form-item label="学历" :required="true" label-width="150">
				<u-input v-model="form.xueli" type="select" slot='right' @click="show3 = true" />
				<u-select v-model="show3" mode="single-column" :list="eduexp" @confirm="xgxl()"></u-select>
			</u-form-item>
			<u-form-item label="婚姻状况" :required="true" label-width="150">
				<u-input v-model="form.hyzk" type="select" slot='right' @click="show4 = true" />
				<u-select v-model="show4" mode="single-column" :list="hyzk" @confirm="xghy()"></u-select>
			</u-form-item>
		</u-form>
		<u-button type="primary" class="btn" @click="xiugai()">修改</u-button>

	</view>
</template>

<script>
	import encryption from '../../ulits/aes.js'

	const value = uni.getStorageSync("sfzm");
	const name = uni.getStorageSync("name");
	const grzh = uni.getStorageSync("cardno");
	let ad = uni.getStorageSync("accnum");
	const all = uni.getStorageSync("all")
	// 加密
	let a = encryption.Encrypt(ad);
	console.log('加密',a);
    let b = encryption.Encrypt(ad);
	console.log(b);
	// var a = AES.encrypt(JSON.stringify(ad),'c104a9006ce20039692a8b344edf51e3'); //加密的grzh
	// var b = AES.encrypt(JSON.stringify(name),'c104a9006ce20039692a8b344edf51e3') //加密的姓名
	export default {
		data() {
			return {
				show4: false, 
				show3: false,
				show2: false,
				show1: false,
				show: false,
				grzh: "", //个人账号
				name: uni.getStorageSync("name"),
				zjlx: "",
				zjhm: uni.getStorageSync("sfzm"),
				form: {
					jtzz: uni.getStorageSync("jtzz"),
					yzbm: uni.getStorageSync("yzbm"),
					jtysr: uni.getStorageSync("jtysr"),
					gddhhm: uni.getStorageSync("gddhhm"),
					zhiye: uni.getStorageSync("zhiye"),
					zhichen: uni.getStorageSync("zhichen"),
					zhiwu: uni.getStorageSync("zhiwu"),
					xueli: uni.getStorageSync("xueli"),
					hyzk: uni.getStorageSync("hyzk"),
				},
				occupation: [{
						value: "11",
						label: "国家公务人员"
					},
					{
						value: "13",
						label: "专业技术人员"
					},
					{
						value: "17",
						label: "职员"
					},
					{
						value: "21",
						label: "企业管理人员"
					},
					{
						value: "24",
						label: "工人"
					},
					{
						value: "27",
						label: "农民"
					},
					{
						value: "31",
						label: "学生"
					},
					{
						value: "37",
						label: "现役军人"
					},
					{
						value: "51",
						label: "自由职业者"
					},
					{
						value: "54",
						label: "个体经营者"
					},
					{
						value: "70",
						label: "无业人员"
					},
					{
						value: "80",
						label: "退(离)休人员"
					},
					{
						value: "90",
						label: "其他"
					}
				],
				headship: [{
						value: "1",
						label: "领导"
					},
					{
						value: "2",
						label: "职员"
					},
					{
						value: "9",
						label: "其他"
					}
				],
				techpost: [{
						value: "0",
						label: "无"
					},
					{
						value: "1",
						label: "初级"
					},
					{
						value: "2",
						label: "中级"
					},
					{
						value: "3",
						label: "高级"
					},
					{
						value: "9",
						label: "其他"
					},
				],
				eduexp: [{
						value: "2",
						label: "博士"
					},
					{
						value: "3",
						label: "硕士"
					},
					{
						value: "4",
						label: "学士"
					},
					{
						value: "999",
						label: "其他"
					},
				],
				hyzk: [{
						value: "10",
						label: "未婚"
					},
					{
						value: "20",
						label: "已婚"
					},
					{
						value: "30",
						label: "丧偶"
					},
					{
						value: "40",
						label: "离婚"
					},
				],
				rules: {
					name: [{
						required: false,
						message: '请输入姓名',
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change', 'blur'],
					}],
					intro: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}]
				}
			};
		},
		onShow() {
			this.change1();
			// 职业
			switch (uni.getStorageSync("zhiye")) {
				case "11":
					this.form.zhiye = "国家公务员";
					break;
				case "13":
					this.form.zhiye = "专业技术人员";
					break;
				case "17":
					this.form.zhiye = "职员";
					break;
				case "21":
					this.form.zhiye = "企业管理人员";
					break;
				case "24":
					this.form.zhiye = "工人";
					break;
				case "27":
					this.form.zhiye = "农民";
					break;
				case "31":
					this.form.zhiye = "学生";
					break;
				case "37":
					this.form.zhiye = "现役军人";
					break;
				case "51":
					this.form.zhiye = "自由职业者";
					break;
				case "54":
					this.form.zhiye = "个体经营者";
					break;
				case "70":
					this.form.zhiye = "无业人员";
					break;
				case "80":
					this.form.zhiye = "退(离)休人员";
					break;
				case "90":
					this.form.zhiye = "其他";
					break;
			};
			// 职务
			switch (uni.getStorageSync("zhiwu")) {
				case "1":
					this.form.zhiwu = "领导";
					break;
				case "2":
					this.form.zhiwu = "职员";
					break;
				case "9":
					this.form.zhiwu = "其他";
					break;
			};
			// 职称
			switch (uni.getStorageSync("zhichen")) {
				case "0":
					this.form.zhichen = "无";
					break;
				case "1":
					this.form.zhichen = "初级";
					break;
				case "2":
					this.form.zhichen = "中级";
					break;
				case "3":
					this.form.zhichen = "高级";
					break;
				case "9":
					this.form.zhichen = "其他";
					break;
			};
			// 学历
			switch (uni.getStorageSync("xueli")) {
				case "2":
					this.form.xueli = "博士";
					break;
				case "3":
					this.form.xueli = "硕士";
					break;
				case "4":
					this.form.xueli = "学士";
					break;
				case "999":
					this.form.xueli = "其他";
					break;
			};
			// 婚姻状况
			switch (uni.getStorageSync("hyzk")) {
				case "10":
					this.form.hyzk = "未婚";
					break;
				case "20":
					this.form.hyzk = "已婚";
					break;
				case "30":
					this.form.hyzk = "丧偶";
					break;
				case "40":
					this.form.hyzk = "离婚";
					break;
				case "90":
					this.form.hyzk = "未说明的婚姻状况";
					break;
			};
		},
		methods: {
			// 修改职业
			xgzy(e) {
				this.form.zhiye = e[0].label
			},
			// 修改职务
			xgzw(e) {
				this.form.zhiwu = e[0].label
			},
			// 修改职称
			xgzc(e) {
				this.form.zhichen = e[0].label
			},
			// 修改学历
			xgxl(e) {
				this.form.xueli = e[0].label
			},
			// 修改婚姻状况
			xghy(e) {
				this.form.hyzk = e[0].label
			},
			// 下拉回调
			confirm(e) {
				console.log(e);
				this.form.sex = e[0].label
			},
			async change1() {
				let option = {
					url: "A6002",
					data: {
						ybmapMessage: {
							pwd: "",
							flag: "1",
							type: "01",
							"dlfs": "09",
							"actmp1024": "certitype,occupation,headship,techpost,eduexp,hyzk,"
						},
						__openid: value,
						buztype: "7519"
					}
				}
				let res = await this.$http(option)
				if (res.data.recode == "000000") {
					this.change2()
				}
			},
			async change2() {
				let option = {
					url: "A5000",
					data: {
						__openid: uni.getStorageSync("sfzm"),
						buztype: "5001",
						ybmapMessage: {
							pwd: "",
							flag: "1",
							type: "01",
							"dlfs": "09",
							grzh: grzh,
							dlfs: "1",
							zjhm: uni.getStorageSync("sfzm"),
							certinum: uni.getStorageSync("sfzm"),
						}
					}
				}
				// console.log(option);
				let res = await this.$http(option)
				uni.setStorageSync("grzha", res.data.result[1].info);
				uni.setStorageSync("zjlx1", res.data.result[8].info);
				this.grzh = uni.getStorageSync("grzha");
				this.zjlx = uni.getStorageSync("zjlx1")
			},
			// 点击变更的时候调用
			async xiugai() {
				let option = {
					url: "A6004",
					data: {
						buztype: "7601",
						__openid: value,
						ybmapMessage: {
							grzh: a,
							pwd: "",
							flag: "1",
							type: "01",
							"dlfs": "09",
							xingming: b,
							zjlx: this.zjlx,
							zjhm: this.zjhm,
							xingbe: all.xingbie,
							csny: all.csny,
							sjhm: all.sjhm,
							dwzh: all.dwzh,
							gddhhm: this.form.gddhhm,
							yzbm: this.form.yzbm,
							jtysr: this.form.jtysr,
							jtzz: this.form.jtzz,
							hyzk: this.form.hyzk,
							zhiye: this.form.zhiwu,
							zhiwu: this.form.zhiwu,
							zhichen: this.form.zhichen,
							xueli: this.form.xueli,
						}
					}
				};
				let res = await this.$http(option);
			}
		}

	};
</script>

<style>
	.change {
		width: 100%;
	}

	.change p {
		font-size: 14px;
		padding: 0 10px;
		width: 100%;
		height: 35px;
		line-height: 35px;
		color: #2B85E4;
		background-color: rgb(240, 240, 240);
	}

	/* 表单 */
	.one {
		width: 100%;
		/* padding: 0 10px; */
	}

	/* 微信小程序内边距问题 */
	.u-form-item .data-v-006449ec {
		padding: 3rpx 8rpx;
	}

	/* 按钮 */
	.btn {
		width: 80%;
		height: 30px;
		margin-top: 10px;
	}
</style>
