<template>
	<view class="nextStep">
		<u-form :model="form" ref="uForm" class="one">
			<p>提取原因和提取材料</p>
			<u-form-item label="提取原因" label-width="150">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="是否补足" label-width="150">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="提取人与材料所有人的关系" label-width="190">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>

			<p>提取信息</p>
			<u-form-item label="贷款类型" label-width="150">
				<u-input v-model="form.sex" type="select" slot='right' />
			</u-form-item>
			<u-form-item label="第N套房" label-width="150">
				<u-input v-model="form.sex" type="select" slot='right' />
			</u-form-item>

			<p>公积金贷款信息</p>
			<u-form-item label="借款合同号" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款合同号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="借款人姓名" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款人姓名" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="借款人证件号" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款人证件号" type="text" slot="right"></u-input>
			</u-form-item>

			<p>商业贷款信息(提取区间信息)</p>

			<u-form-item label="借款合同编号" label-width="190">
				<u-input v-model="form.name" placeholder="请输入借款合同编号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="还款期数" label-width="190">
				<u-input v-model="form.name" placeholder="请输入还款期数" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="月还款额" label-width="190">
				<u-input v-model="form.name" placeholder="请输入月还款额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="提前还款金额" label-width="190">
				<u-input v-model="form.name" placeholder="请输入提前还款金额" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="房屋坐落" label-width="150" label-position="top">
				<u-input v-model="form.name" placeholder="  请输入房屋坐落" type="textarea" />
			</u-form-item>
			<u-form-item label="是否玉林市辖区内房子" label-width="300">
				<u-input v-model="form.sex" type="select" slot='right' placeholder="请选择" />
			</u-form-item>
			<p>提取金额信息</p>
			<u-form-item label="本次提取的金额" label-width="220">
				<u-input v-model="form.name" placeholder="请计算本次提取的金额" />
				<u-button class="jisuan" size="mini">计算</u-button>
			</u-form-item>
			<p>电子档案</p>
			<u-form-item label="上传电子档案" label-width="220">
				<u-button type="default" @click="upload()" class="jisuan" size="mini">上传</u-button>
			</u-form-item>

		</u-form>
		<button type="primary">提交</button>
		<button @click="back()" type="primary">上一步</button>
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

	/* 表单 */
/* 微信小程序内边距问题 */
	.u-form-item .data-v-006449ec {
		padding: 3rpx 7rpx ;
	}
	/* 按钮距离表单距离 */
	uni-button[type=primary] {
		margin-top: 10px;
	}
	.u-form-item--left__content__label{
		position: relative;
	}
	
	 .jisuan{
		position: absolute;
		top: 12px;
		right: 5rpx;
		 }
</style>
