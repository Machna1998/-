<template>
	<view class="card">
		<u-form :model="form" ref="uForm" class="one">
			<u-form-item label="单位账号" label-width="150">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="单位名称" label-width="150">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="个人账号" label-width="190">
				<u-input v-model="form.name" slot="right" />
			</u-form-item>
			<u-form-item label="姓名" label-width="150">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="证件号码" label-width="150">
				<u-input v-model="form.sex" slot='right' />
			</u-form-item>
			<u-form-item label="银行卡卡号" label-width="150">
				<u-input v-model="form.name" placeholder="请输入银行卡卡号" type="text" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="所属银行" label-width="150">
				<u-input v-model="form.name" placeholder="请选择" type="select" slot="right"></u-input>
			</u-form-item>
			<u-form-item label="操作类型" label-width="180">
				<u-input v-model="form.name" placeholder="关联联名卡" type="text" slot="right"></u-input>
			</u-form-item>
		</u-form>

		<u-button :plain="true">银行卡有效性校验</u-button>
		<u-button type="primary">提交</u-button>

		<!-- 警告内容 -->
		<p>
			<u-icon name="info-circle-fill " size="50" color="red"></u-icon>
			<view>
				目前绑卡只支持中国农业银行，农村信用合作社，中国建设银行，交通银行，北部湾银行以及中国工商银行，其他银行功能正在研发中
			</view>
		</p>
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
			}
		}
	}
</script>

<style>
	.card {
		width: 100%;
		padding: 0 10px;
	}

	.u-btn--default[data-v-6e15e680] {
		border: 0.5px solid #007AFF;
		color: #007AFF;
		background-color: rgb(240, 240, 240);
	}

	.u-btn--primary[data-v-6e15e680] {
		background-color: rgb(192, 192, 192);
		border: none;
	}

	uni-button {
		margin-top: 10px;
	}

	p {
		font-size: 12px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		margin-top: 20px;
	}

	u-icon {
		/* display: inline-block; */
		margin-right: 10px;
	}
</style>
