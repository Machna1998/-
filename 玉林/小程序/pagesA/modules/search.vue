<template>
	<view class="">
		<u-calendar v-model="show" :mode="mode" @change="change"></u-calendar>
		<u-button @click="show = true" type="primary">请选择开始时间和结束时间</u-button>

		<view class="end">
			<p><text>还款总金额</text> <text>456789</text></p>
			<ul>
				<li><text class="one">当前期次</text><text class="two">34564567</text></li>
				<li><text class="one">记账日期</text><text class="two">34564567</text></li>
				<li><text class="one">扣款方式</text><text class="two">34564567</text></li>
				<li><text class="one">实还本金</text><text class="two">34564567</text></li>
				<li><text class="one">实还利息</text><text class="two">34564567</text></li>
				<li><text class="one">实还罚息</text><text class="two">34564567</text></li>
				<li><text class="one">贷款余额</text><text class="two">34564567</text></li>
			</ul>
		</view>
	</view>

</template>

<script>

	var begdate = "";
	var enddate = "";
	export default {
		data() {
			return {
				show: false,
				mode: 'range'
			}
		},
		onShow() {
	const value = uni.getStorageSync("sfzm");
	const grzh = uni.getStorageSync("cardno");
		},
		methods: {
			change(e) {
				begdate = e.startDate;
				enddate = e.endDate;
				// console.log(enddate,begdate);
				this.mingxi(begdate,enddate)
			},
			async mingxi(a,b) {
				let option = {
					url: "A5001",
					data: {
						__openid: uni.getStorageSync("sfzm"),
						buztype: "5002",
						ybmapMessage:{
							pwd:"",
							flag:"1",
							dlfs:"1",
							grzh: uni.getStorageSync("cardno"), //公积金账号，
							certinum: uni.getStorageSync("sfzm"),
							ywmxlx: "",
							type: '1',
							ispaging: "1",
							begdate: a,
							enddate: b,
							pagenum:"1",
							pagerows:"6",
							zjhm:uni.getStorageSync("sfzm")
						}
						
					}
				}
				let res = await this.$http(option)
			
			}
			
		}
	}
</script>

<style scoped>
/* 查询出来的结果 */
	.end {
		display: block;
		width: 90%;
		height: 240px;
		background-color: #C0C0C0;
		margin: 0 auto;
		margin-top: 20px;
      border-radius: 10px;
	}

	.end p {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		 padding: 0 5px; 
		width: 100%;
		border-top-right-radius: 10px;
		border-top-left-radius: 10px;
		height: 30px;
		background-color: #2B85E4;
		color: #FFFFFF;
		line-height: 30px;
		font-size: 15px;
		text-align: right;
	}

	.end ul {
		overflow: hidden;
		background-color: #fff;
		padding-left: 0;
	}

	.end li {
		height: 25px;
		line-height: 25px;
		color: #000000;
		list-style: none;
		padding: 0 5px;
		
	}

	.end .one {
		float: left;
	}

	.end .two {
		float: right;
	}
</style>
