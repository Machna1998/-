<template>
	<view>
		<view class="leave_cont">
			<u-form :model="form" ref="uForm" class="one">
				<u-form-item label="申报状态" label-width="150">
					<u-input v-model="status" slot="right" placeholder=" " type="select" />
				</u-form-item>
			</u-form>
			<view class="ul">
				<view class="li">
					<text>创建时间(从)</text>
					<view class="flex1">
						<picker mode="date" :value="start_date" :start="start_date" :end="other"
							@change="bindDateChange">
							<view class="date">{{start_date}}</view>
						</picker>
					</view>
				</view>
				<view class="li">
					<text>创建时间(至)</text>
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
			<p>年终结息</p>
			<ul>
				<li><text class="one">交易日期</text><text class="two">34564567</text></li>
				<li><text class="one">交易类型</text><text class="two">34564567</text></li>
				<li><text class="one">发生额</text><text class="two">34564567</text></li>
				<li><text class="one">发生利息额</text><text class="two">34564567</text></li>
				<li><text class="one">账户余额</text><text class="two">34564567</text></li>
				<li><text class="one">经办机构</text><text class="two">34564567</text></li>
				<li><text class="one">摘要</text><text class="two">34564567</text></li>
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
				other: '请输入',
				status: "",
				form: {
					name: '',
					intro: 'ghjk',
					sex: ""
				},
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
			// 获取上一年的时间

			before() {
				var that = this
				let myDate = new Date();
				let nowY = myDate.getFullYear();
				let nowM = myDate.getMonth() + 1;
				let nowD = myDate.getDate();
				let endDate = nowY + "" + (nowM < 10 ? "0" + nowM : nowM) + "" + (nowD < 10 ? "0" + nowD : nowD); // 当前日期
				var date = new Date();
				var y = date.getFullYear() - 1; // 减一是算去年时间，+ 1 是明年时间
				var m = date.getMonth();
				var d = date.getDate();
				var h = date.getHours();
				var minute = date.getMinutes();
				var s = date.getSeconds();
				var dateStr = y + "-" + (m + 1) + "-" + d
				console.log(dateStr);
				var num = that.other;
				that.setDate({
					num: dateStr
				})
				console.log(num);
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
		},
		onShow() {
			this.before()
		}
	}
</script>
<style>
	.u-form-item[data-v-006449ec] {
		padding-left: 10px;
		padding-right: 5px;
	}

	.leave_cont .ul {
		/* padding:0 10px */
	}

	.leave_cont .ul .li {
		padding: 0 10px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #efefef;
	}

	.leave_cont .ul .li text {
		padding: 40rpx 0;
		/* font-size: 34rpx; */
		/* font-family: '黑体'; */
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
	/* 微信小程序内边距问题 */
		.u-form-item .data-v-006449ec {
			padding: 3rpx 8rpx ;
		}
</style>
