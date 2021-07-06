<template>
	<view class="loans">
		<p>提取人信息</p>
		<u-cell-group>
			<u-cell-item title="证件类型" value="身份证" :arrow="false"></u-cell-item>
			<u-cell-item title="证件号" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="个人账号" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="姓名" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="个人账户状态" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="当前余额" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="可用余额" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="缴至年月" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="是否有公积金贷款" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="账户应保留月缴存总额" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="冻结标志" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="单位账号" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="账户机构" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="单位名称" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="手机号码" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="婚姻状况" value="学校" :arrow="false"></u-cell-item>
		</u-cell-group>
		<p>结算信息</p>
		<u-cell-group>
			<u-cell-item title="结算方式" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="收款人开户银行" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="收款人银行账号" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="收款人账户名称" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item title="收款人证件号码" value="学校" :arrow="false"></u-cell-item>
		</u-cell-group>
		<u-button type="primary" @click="next()">下一步</u-button>

	</view>
</template>

<script>
	let value = ""
	export default {
		data() {
			return {

			}
		},
		methods: {
			next() {
				// console.log(value);
				switch (value) {
					case "a": uni.navigateTo({url: "nextStep"}); break;
					case "b": uni.navigateTo({url: "gtfqnext"}); break;
					case"3":uni.navigateTo({url:"TQ-tuixiu"});break
				}
			}
		},
		onLoad(e) {
			value = e.value
			// console.log(value);
		}
	}
</script>

<style>
	.loans {
		width: 100%;
	}

	.loans p {
		font-size: 14px;
		padding: 0 10px;
		width: 100%;
		height: 35px;
		line-height: 35px;
		color: #2B85E4;
		background-color: rgb(240, 240, 240);
	}
</style>
