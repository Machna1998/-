<template>
	<view class="nextStep">
		<u-form :model="form" ref="uForm" class="one">
			<p>合同当前信息</p>
			<u-form-item label="借款合同编号" label-width="200">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="贷款类型" label-width="180">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="剩余期限" label-width="190">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="贷款还款方式" label-width="200">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="剩余未还期次" label-width="200">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="房屋性质" label-width="180">
				<u-input v-model="form.name" placeholder="请输入借款合同号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="借款人姓名" label-width="200">
				<u-input v-model="form.name" placeholder="请输入借款人姓名" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="借款人证件号" label-width="200">
				<u-input v-model="form.name" placeholder="请输入借款人证件号" type="text" slot="right"></u-input>
			</u-form-item>

			<u-form-item label="放款日期" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款合同编号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="到期日期" label-width="190">
				<u-input v-model="form.name" placeholder="请输入还款期数" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="到期终止日期" label-width="200">
				<u-input v-model="form.name" placeholder="请输入月还款额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="贷款余额" label-width="190">
				<u-input v-model="form.name" placeholder="请输入提前还款金额" type="text" slot="right"></u-input>
			</u-form-item>
			<p>金额明细</p>
			<u-form-item label="应还未还本金" label-width="200">
				<u-input v-model="form.name" placeholder="  请输入房屋坐落" slot='right' />
			</u-form-item>
			<u-form-item label="应还未还利息" label-width="200">
				<u-input v-model="form.sex" slot='right' placeholder="请选择" />
			</u-form-item>
			<u-form-item label="罚息" label-width="220">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="应还未还总金额" label-width="240">
				<u-input v-model="form.name" slot='right' placeholder="  请输入房屋坐落" />
			</u-form-item>
			<u-form-item label="未到期本金" label-width="200">
				<u-input v-model="form.sex" slot='right' placeholder="请选择" />
			</u-form-item>
			<u-form-item label="新产生的利息" label-width="220">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="提前还款最低限额" label-width="300">
				<u-input v-model="form.sex" slot='right' placeholder="请选择" />
			</u-form-item>
			<u-form-item label="提前全部还款金额" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<p>还款方式</p>
			<u-form-item label="还款方式" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<p>付款信息</p>
			<u-form-item label="付款人类型" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="付款账号开户银行" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="付款人账号" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="付款人账户名称" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="付款人证件类型" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="付款人证件号码" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请计算本次提取的金额" />
			</u-form-item>
			<p>还款信息</p>
			<u-form-item label="提前部分还款" label-width="280">

				<u-input v-model="form.name" slot='right' type="select" placeholder="请计算本次提取的金额" />
			</u-form-item>
			<u-form-item label="还款原因" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请输入还款原因" />
			</u-form-item>
			<p>还款结算信息</p>
			<u-form-item label="提前还本金" label-width="280">
				<u-input v-model="form.name" slot='right' placeholder="请输入还款原因" />
			</u-form-item>
			<u-form-item label="还款总金额" label-width="220" >
				<u-input v-model="form.name" placeholder="请计算本次提取的金额" />
				<u-button class="jisuan" size="mini">金额确认</u-button>
			</u-form-item>
		</u-form>
		<button type="primary">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					intro: 'ghjk',
					sex: ""
				},
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
		methods: {
			// 上传文件
			upload() {
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						const uploadTask = uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
							}
						});

						uploadTask.onProgressUpdate((res) => {
							console.log('上传进度' + res.progress);
							console.log('已经上传的数据长度' + res.totalBytesSent);
							console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

							// 测试条件，取消上传任务。
							if (res.progress > 50) {
								uploadTask.abort();
							}
						});
					}
				});
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕

	};
</script>

<style>
	.nextStep {
		width: 100%;
	}

	.nextStep p {
		font-size: 14px;
		padding: 0 10px;
		width: 100%;
		height: 35px;
		line-height: 35px;
		color: #2B85E4;
		background-color: rgb(240, 240, 240);
	}
	.u-form-item--left__content__label{
		position: relative;
	}
     .jisuan{
		position: absolute;
		top: 12px;
		right: 5rpx;
		 }

	/* 微信小程序内边距问题 */
	.u-form-item .data-v-006449ec {
		padding: 3rpx 8rpx;
	}

	/* 按钮距离表单距离 */
	uni-button[type=primary] {
		margin-top: 10px;
	}
</style>
