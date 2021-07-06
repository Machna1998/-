<template>
	<view>
		<view class="leave_cont">
			<view class="ul">
				<view class="li">
					<text>开始时间</text>
					<view class="flex1">
						<picker mode="date" :value="start_date" :start="start_date" :end="other"
							@change="bindDateChange">
							<view class="date">{{start_date}}</view>
						</picker>
					</view>
				</view>
				<view class="li">
					<text>结束时间</text>
					<view class="flex1">
						<picker mode="date" :value="start_date" :start="start_date" @change="bindDateChange2">
							<view class="date">{{end_date}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<u-button type="primary" class="btn" @click="search()">开始查询</u-button>

		<!-- 查询出来的结果 -->
		<view class="end">
			<p><text>还款总金额</text>  <text>456789</text></p>
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
		
		<view class="end">
			<p><text>还款总金额</text>  <text>456789</text></p>
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
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				start_date: currentDate,
				end_date: currentDate,
				other: '请输入'
			}
		},
		computed: {

		},
		methods: {
			// 选择日期
			bindDateChange: function(e) {
				this.start_date = e.target.value

			},
			bindDateChange2: function(e) {
				this.end_date = e.target.value;
				this.other = this.end_date;
			},
			// 获取当前时间
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
		}
	}
</script>
<style>
	

	.leave_cont .ul .li {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #efefef;
		padding: 0 10px;
	}

	.leave_cont .ul .li text {
		padding: 40rpx 0;
		font-size: 34rpx;
		font-family: '黑体';
	}

	.leave_cont .ul .li .flex1 {
		flex: 1;
		text-align: right;
		padding-right: 25rpx;
		color: #999999;
		font-size: 32rpx;
	}

	.date {
		height: 42rpx;
	}

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
