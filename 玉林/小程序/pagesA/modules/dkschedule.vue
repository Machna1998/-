<template>
	<view class="">
		<p>
			<text>当前办理状态</text>
			<text>放款成功</text>
		</p>
		<view class="liucheng">
			<ul>
				<li> <text class="left">2012-09-22</text> 
				<view><span></span><text>贷款申请</text><text class="green">已通过</text></view>
				</li>
				<li> <text class="left">2012-09-22</text>
				<view><span></span><text>贷款申请</text><text class="green">已通过</text></view>
				</li>
			</ul>
			<!-- <u-steps :list="numList" :current="1" direction="column" ></u-steps> -->
		</view>
			
	</view>
</template>

<script>
	export default{
		data(){
			return{
				numList: [{
									name: '下单'
								}, {
									name: '出库'
								}, {
									name: '运输'
								}, {
									name: '签收'
								}, ],
			}
			}
	}
</script>

<style>
	p{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #007AFF;
		color: #fff;
		height: 40px;
		font-size: 15px;
		padding: 0 10px;
	}
	/* 进度条 */
	ul{
			width: 100%;
			padding: 0;
	}
	li{
		width: 100%;
		list-style: none;
		height: 40px;
		line-height: 40px;
		/* background-color: #18B566; */
		font-size: 13px;
	}
	li .left{
		width: 40%;
		float: left;
		/* background-color: #108EE9;s */
		text-align: center;
	}
	li view{
		position: relative;
		width: 60%;
		float: right;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-left: 2px solid #C0C0C0;
		/* background-color: #4CD964;/ */
		padding: 0 10px;
	}
	li span{
		position: absolute;
		left: -5px;
		width: 5px;
		height: 5px;
		border: 2px solid #C0C0C0;
		border-radius: 50%;
		background-color: #fff;
	}
	/* 通过的颜色 */
	.green{
		color:rgb(131,210,187) ;
	}
</style>
