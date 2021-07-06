<template>
	<view>
		<view class="title">
			归集业务
		</view>
		<view class="content clearfix">
			<ul>
				<li @click="basic()">
					<image src="../../static/img/icon_ywbl_gjjjbxxcx.png" mode=""></image>
					<p>公积金基本信息查询</p>
				</li>
				<li @click="search()">
					<image src="../../static/img/icon_ywbl_gjjmxcx.png" mode=""></image>
					<p>公积金明细查询</p>
				</li>
				<li @click="change()">
					<image src="../../static/img/icon_ywbl_zgjbxx.png" mode=""></image>
					<p>职工基本信息变更</p>
				</li>
			</ul>
		</view>

		<view class="title">
			提取业务
		</view>

		<view class="content clearfix">
			<ul>
				<li @click="loans(a)">
					<image src="../../static/img/icon_ywbl_chgfdktq.png" mode=""></image>
					<p>偿还贷款本息提取</p>
				</li>
				<li @click="loans(b)">
					<image src="../../static/img/icon_ywbl_gftq.png" mode=""></image>
					<p>购房提取</p>
				</li>
				<li @click="loans(c)">
					<image src="../../static/img/icon_ywbl_sdjhjt.png" mode=""></image>
					<p>商贷即还即提</p>
				</li>
				<li @click="loans(d)">
					<image src="../../static/img/icon_ywbl_zftq.png" mode=""></image>
					<p>租房提取</p>
				</li>
				<li @click='loans(e)'>
					<image src="../../static/img/icon_ywbl_tfsjzc.png" mode=""></image>
					<p>突发事件造成家庭困难提取</p>
				</li>
				<li @click='loans(f)'>
					<image src="../../static/img/icom_ywbl_jftq.png" mode=""></image>
					<p>住房提取功能</p>
				</li>
				<li @click='loans(g)'>
					<image src="../../static/img/icon_ywbl_dxtq.png" mode=""></image>
					<p>大修提取功能</p>
				</li>
				<li @click='loans(h)'>
					<image src="../../static/img/icon_ywbl_xsdbtq.png" mode=""></image>
					<p>享受低保提取功能</p>
				</li>
				<li @click='cancelaccloans(03)'>
					<image src="../../static/img/icon_ywbl_ltxtq.png" mode=""></image>
					<p>离休/退休提取</p>
				</li>
				<li @click='cancelaccloans(04)'>
					<image src="../../static/img/icon_ywbl_wqssldnl.png" mode=""></image>
					<p>完全丧失劳动能力并与单位终止劳动关系提取</p>
				</li>
				<li @click='cancelaccloans(05)'>
					<image src="../../static/img/icon_ywbl_cjdjtq.png" mode=""></image>
					<p>出境定居提取</p>
				</li>

				<li @click='loans(i)'>
					<image src="../../static/img/icon_ywbl_dttq.png" mode=""></image>
					<p>电梯提取功能</p>
				</li>
				<li @click='cancelaccloans(81)'>
					<image src="../../static/img/icon_ywbl_wqssld.png" mode=""></image>
					<p>完全丧失劳动,人事关系后没有建立新的劳动,人事关系提取</p>
				</li>
				<li @click="card(g)">
					<image src="../../static/img/icon_ywbl_yhkbdyjb.png" mode=""></image>
					<p>银行卡绑定与解绑</p>
				</li>



			</ul>
		</view>

		<view class="title one">
			贷款业务
		</view>
		<view class="content clearfix">
			<ul>
				<li @click="refund()">
					<image src="../../static/img/icon_ywbl_tqhk.png" mode=""></image>
					<p>提前还款</p>
				</li>
				<li @click="repay()">
					<image src="../../static/img/icon_ywbl_gjjchdqy.png" mode=""></image>
					<p>公积金冲还贷签约/撤销</p>
				</li>
				<li @click="loansSearch()">
					<image src="../../static/img/icon_ywbl_dkxx.png" mode=""></image>
					<p>贷款信息</p>
				</li>
				<li @click="hkdetail()">
					<image src="../../static/img/icon_ywbl_hkmx.png" mode=""></image>
					<p>还款明细</p>
				</li>
				<li @click="dkschedule()">
					<image src="../../static/img/icon_ywbl_dkjd.png" mode=""></image>
					<p>贷款进度</p>
				</li>
				<li>
					<image src="../../static/img/icom_ywbl_dkss.png" mode=""></image>
					<p>贷款试算</p>
				</li>
				<li>
					<image src="../../static/img/icon_ywbl_hkzhbg.png" mode=""></image>
					<p>还款账户变更</p>
				</li>
			</ul>
		</view>

		<view class="title">
			申报业务
		</view>
		<view class="content clearfix">
			<ul>
				<li @click="declare()">
					<image src="../../static/img/icon_ywbl_sbywcx.png" mode=""></image>
					<p>申报业务查询</p>
				</li>
			</ul>
		</view>
		<view class="title">
			预约业务
		</view>
		<view class="content clearfix">
			<ul>
				<li @click="wdyy()">
					<image src="../../static/img/icon_ywbl_wdyyqkcx.png" mode=""></image>
					<p>网点预约情况查询</p>
				</li>
				<li @click="zxyy()">
					<image src="../../static/img/icon_ywbl_wdyyqkcx.png" mode=""></image>
					<p>预约申请</p>
				</li>
				<li>
					<image src="../../static/img/icon_ywbl_yycxycx.png" mode=""></image>
					<p>预约查询与撤销</p>
				</li>
			</ul>
		</view>
	</view>



</template>

<script>

	export default {
		data() {
			return {
			}
		},
		onShow() {
			uni.hideHomeButton({})
		},
		methods: {
			// 基本查询
			basic() {
				uni.navigateTo({
						url: "../modules/basic"
					})

			},
			// 明细查询
			search() {
				uni.navigateTo({
					url: "../modules/search"
				})
			},
			// 个人基本信息变更
			change() {
				uni.navigateTo({
					url: "../modules/change"
				})
			},
			// 偿还购房贷款本息提取
			loans(a) {
				uni.navigateTo({
					url: "../modules/loans?value="+a
				})
			},
			// 销户类提取
			cancelaccloans(b){
				const a = uni.getStorageSync('tqyy')
				const skryhzhmc = uni.getStorageSync('skryhzhmc')
				// if(a == ''){
				// 	 this.$tips.showtoast('提取原因不能为空，请检查！');
				// 	  // wx.loading().hide();
				// 	   return false
				// 	   }
			 //    if(a == '71'){
				// 	 this.$tips.showtoast('您的账户暂不能自助办理销户提取业务，请到柜台办理！');
				// 	  // wx.loading().hide();
				// 	   return false
				// 	   }
			 //    if(b != a){
				// 	 this.$tips.showtoast('您的账户无法办理此业务！');
				// 	  // wx.loading().hide();
				// 	   return false
				// 	   }
			 //    if(skryhzhmc == ''){
				// 	 this.$tips.showtoast('您还未绑定联名卡，请先绑定联名卡！');
				// 	  // wx.loading().hide();
				// 	   return false
				// 	   }
				uni.navigateTo({
					url: "../modules/loans?value="+b
				})	   
			},
			// 银行卡绑定与解绑
			card() {
				uni.navigateTo({
					url: "../modules/card"
				})
			},
			// 提前还款
			refund() {
				uni.navigateTo({
					url: "../modules/refund"
				})
			},
			// 公积金冲还贷签约/撤销
			repay() {
				uni.navigateTo({
					url: "../modules/repay"
				})
			},
			// 贷款信息查询
			loansSearch() {
				uni.navigateTo({
					url: "../modules/loansSearch"
				})
			},
			// 还款明细
			hkdetail() {
				uni.navigateTo({
					url: "../modules/hkdetail"
				})
			},
			// 贷款进度查询
			dkschedule() {
				uni.navigateTo({
					url: "../modules/dkschedule"
				})
			},
			// 申报业务
			declare() {
				uni.navigateTo({
					url: "../modules/declare"
				})
			},
			// 网点预约情况查询
			wdyy() {
				uni.navigateTo({
					url: "../modules/wdyy"
				})
			},
			// 预约申请
			zxyy() {
				uni.navigateTo({
					url: "../modules/zxyy"
				})
			}
		}
	}
</script>

<style>
	.title {
		width: 100%;
		height: 40px;
		background-color: rgb(249, 249, 249);
		font-size: 18px;
		line-height: 40px;
		font-weight: 600;
		padding: 0 20px;
	}

	.content {
		width: 100%;
	}

	ul {
		width: 100%;
		padding: 0;
		/* overflow: hidden; */
	}

	.content li {
		float: left;
		list-style: none;
		width: 25%;
		height: 105px;
		text-align: center;
		margin: 0 auto;

	}

	li image {
		margin-top: 10px;
		width: 37px;
		height: 37px;
	}

	li p {
		display: block;
		/* width: 90px; */
		width: 90%;
		/* margin: 0 auto; */
		text-align: center;
		font-size: 13px
	}

	.one {
		margin-top: 35px;
	}

	.clearfix:after {
		/*伪元素是行内元素 正常浏览器清除浮动方法*/
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
</style>
