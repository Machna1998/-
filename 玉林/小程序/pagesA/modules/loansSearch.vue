<template>
	<view>
		<view class="top">
			<text class="name">黄佳</text>
		<view class="balance">
			<text class="yuer">贷款余额</text>
			<p>
				<text>2345</text> <span>元</span>
			</p>
			<p class="detail">还款明细</p>
		</view>
		</view>
		<u-cell-group>
			<u-cell-item  title="借款合同编号"  value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="月还款额" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="还款账号" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="借款人姓名" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="证件号码" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="放款日期"  value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="合同贷款金额" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="贷款期数" value="学校"  :arrow="false"></u-cell-item>
			<u-cell-item  title="贷款利率" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="约定还款日" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="未还本金" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="未还利息" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="欠还罚息" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="是否参与对冲还贷" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="经办机构" value="学校" :arrow="false"></u-cell-item>
			<u-cell-item  title="经办银行" value="学校" :arrow="false"></u-cell-item>	
		</u-cell-group>
		
		
	</view>
</template>

<script>
	import axios from "axios";
	// MOCK = 'true'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			search(){
				　axios.post("http://localhost:8080/goods/goodAll").then((res)=>{
				　　　　　　　　console.log(res)
				　　　　  　})
				
			}
		}
	}
</script>

<style>
.top{
	width: 100%;
	height: 150px;
	background-image: linear-gradient(135deg,rgb(232,112,98) 0%, rgb(230,94,79) 100%);
	padding: 5px 15px;
	margin-bottom: 10px;
	}
		
	.name{
		color: #fff;
		font-size: 17px;
		font-weight:500;
	}
	/* 余额 */
	.balance{
		margin-top: 10px;
		width: 100%;
		height: 100px;
		background-color: #FFFFFF;
		border-radius: 20px;
		color: rgb(232,112,98);
		padding: 15px 10px;
		
	}
	.balance .yuer{
		width: 100%;
		font-size: 12px;
		/* transform:scale(0.5); */
		display: block;
		margin-bottom:5px;
		color: #000000;
	}
	.balance p text{
		display: inline-block;
		margin-right: 5px;
		font-size: 24px
	}
	.balance .detail{
		float: right;
	}
	.btn{
		width: 80%;
		margin-top: 10px;
	}
</style>
