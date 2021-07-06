<template>
	<view class="nextStep">
		<u-form :model="form" ref="uForm" class="one">

			<u-form-item label="借款合同编号" label-width="220">
				<u-input v-model="form.name" type="select" placeholder="请选择" slot="right" />
			</u-form-item>
			<u-button>查询</u-button>
			<p>合同信息</p>
			<u-form-item label="个人公积金账号" label-width="250">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="借款人证件类型" label-width="250">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="借款人证件号" label-width="220">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="合同贷款金额" label-width="220">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="贷款期数" label-width="150">
				<u-input v-model="form.name" placeholder="请输入借款合同号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="经办银行" label-width="150">
				<u-input v-model="form.name" placeholder="请输入借款人姓名" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="借款人类型" label-width="180">
				<u-input v-model="form.name" placeholder="请输入借款人证件号" type="text" slot="right"></u-input>
			</u-form-item>

			<u-form-item label="借款人姓名" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款合同编号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="还款期数" label-width="190">
				<u-input v-model="form.name" placeholder="请输入还款期数" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="账户金额" label-width="190">
				<u-input v-model="form.name" placeholder="请输入月还款额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="是否操作" label-width="190">
				<u-input v-model="form.name" placeholder="请输入月还款额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="委托代扣协议" label-width="220">
				<u-input v-model="form.name" placeholder="请输入月还款额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="代扣顺序" label-width="200">
				<u-input v-model="form.sex" slot='right' placeholder="请选择" />
			</u-form-item>
			<div class="agree">
				<u-checkbox-group @change="checkboxGroupChange">
				<u-checkbox 
								@change="checkboxChange" 
								v-model="item.checked" 
								v-for="(item, index) in list" :key="index" 
								shape="circle"
							>{{item.name}}</u-checkbox>
				</u-checkbox-group>

				<text>
					本人已详细阅读并确认同意 <a>《玉林市住房公积金贷款卡按月对冲还贷委托协议》 </a>
				</text>
			</div>
		</u-form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
								{
									
									checked: false,
									disabled: false
								},
								],
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
			},

			checkboxChange(e) {
				//console.log(e);
			},
			// 选中任一checkbox时，由checkbox-group触发
			checkboxGroupChange(e) {
				// console.log(e);

			}

		}
	}
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

	/* 表单 */
	/* 微信小程序内边距问题 */
		.u-form-item .data-v-006449ec {
			padding: 3rpx 8rpx ;
		}
	/* 按钮距离表单距离 */
	uni-button[type=primary] {
		margin-top: 10px;
	}

	/* 底部同意 */
	.agree {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		height: 50px;
		background-color: rgb(240, 240, 240);
	}

	/* 单选框大小*/
	.uni-radio .uni-radio-input {
		width: 18px;
		height: 18px;
	}
</style>
