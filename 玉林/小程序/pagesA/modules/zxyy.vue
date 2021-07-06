<template>
	<view class="nextStep">
		<u-form :model="form" ref="uForm" class="one">

			<u-form-item label="业务类型" label-width="150">
				<u-input v-model="form.name" slot="right" placeholder="提取" type="select" />
			</u-form-item>
			<u-form-item label="手机号" label-width="150">
				<u-input v-model="form.name" slot="right" placeholder="请输入手机号" />
			</u-form-item>
			<u-form-item label="预约网点" label-width="190">
				<u-input v-model="form.name" slot="right" placeholder="请选择" type="select" />
			</u-form-item>
			<u-form-item label="预约日期" label-width="190">
				<u-input v-model="form.name" slot="right" placeholder="请选择" type="select" />
			</u-form-item>
			<u-form-item label="预约时间" label-width="190">
				<u-input v-model="form.name" slot="right" placeholder="请选择" type="select" />
			</u-form-item>
		</u-form>
		<button type="primary">提交</button>
		<view class="care">
			<div>注意事项</div>
			<div>1.请预约之后办理业务</div>
		</view>
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
				// 	uni.chooseImage({
				// 		success: (chooseImageRes) => {
				// 			const tempFilePaths = chooseImageRes.tempFilePaths;
				// 			const uploadTask = uni.uploadFile({
				// 				url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
				// 				filePath: tempFilePaths[0],
				// 				name: 'file',
				// 				formData: {
				// 					'user': 'test'
				// 				},
				// 				success: (uploadFileRes) => {
				// 					console.log(uploadFileRes.data);
				// 				}
				// 			});

				// 			uploadTask.onProgressUpdate((res) => {
				// 				console.log('上传进度' + res.progress);
				// 				console.log('已经上传的数据长度' + res.totalBytesSent);
				// 				console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);

				// 				// 测试条件，取消上传任务。
				// 				if (res.progress > 50) {
				// 					uploadTask.abort();
				// 				}
				// 			});
				// 		}
				// 	});
				// }

				// 上传多个文件
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						for (let i = 0; i < tempFilePaths.length; i++) {
							uni.uploadFile({
								url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
								filePath: tempFilePaths[i],
								name: 'file',
								formData: {
									'user': 'test'
								},
								success: (uploadFileRes) => {
									console.log(77);
									console.log(uploadFileRes.data);
								}
							});
						}
					}
				})
			},
			// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
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

	/* 微信小程序内边距问题 */
	.u-form-item .data-v-006449ec {
		padding: 3rpx 7rpx;
	}

	/* 按钮距离表单距离 */
	uni-button[type=primary] {
		margin-top: 10px;

	}

	/* 注意事项 */
	.care {
		padding: 0 10px;

	}

	.care div {
		margin-top: 5px;
		color: #606266;
	}
</style>
