<template>
	<view>
		<view class="top">
			<text class="name">{{username}}</text>
			<view class="balance">
				<text class="yuer">账户余额</text>
				<p>
					<text>{{grzhye}}</text> <span>元</span>
				</p>
				<p class="detail">账户明细</p>
			</view>
		</view>
		<u-cell-group>
			<u-cell-item v-for="item in list" :title=item.title :value=item.info :arrow="false" :key='item.name'>
			</u-cell-item>
		</u-cell-group>

		<u-button type="primary" class="btn" @click="search()">账户明细</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: uni.getStorageSync("name"),
				grzhye: "", //账户余额
				list: []
			}
		},
		onShow() {
			const value = uni.getStorageSync("sfzm");
			const grzh = uni.getStorageSync("cardno");//代替grzh
			const __token = uni.getStorageSync("__token");
			const username = uni.getStorageSync("name");
			// console.log(value,grzh,__token,name);
			this.basicSearch(value,grzh)
		},
		methods: {
			// 基本信息查询
			async basicSearch(a,b) {
				let option = {
					url: "A5000",
					data: {
						__openid: a,
						buztype: "5001",
						ybmapMessage:{
							pwd:"",
							flag:"1",
							type:"01",
							dlfs:"1",
							grzh:b,
							certinum:a,
							zjhm:a
						}
						
					},
					// token: __token
				}
				
				let res = await this.$http(option)
				this.grzhye = res.data.grzhye;
				this.list = res.data.result
			},
			search() {
				uni.navigateTo({
					url: "../modules/search"
				})
			}
		}
	}
</script>

<style>
	.top {
		width: 100%;
		height: 150px;
		background-image: linear-gradient(135deg, #778cea 0%, #7c6da2 100%);
		padding: 5px 15px;
		margin-bottom: 10px;
	}

	.name {
		color: #fff;
		font-size: 17px;
		font-weight: 500;
	}

	/* 余额 */
	.balance {
		margin-top: 10px;
		width: 100%;
		height: 100px;
		background-color: #FFFFFF;
		border-radius: 20px;
		color: rgb(71, 107, 227);
		padding: 15px 10px;

	}

	.balance .yuer {
		width: 100%;
		font-size: 12px;
		/* transform:scale(0.5); */
		display: block;
		margin-bottom: 5px;
		color: #000000;
	}

	.balance p text {
		display: inline-block;
		margin-right: 5px;
		font-size: 24px
	}

	.balance .detail {
		float: right;
	}

	.btn {
		width: 80%;
		margin-top: 10px;
	}
</style>
