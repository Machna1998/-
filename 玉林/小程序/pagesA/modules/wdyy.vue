<template>
	<view class="wdyy">
		<u-cell-group>
				<u-cell-item  title="个人设置" @click="pd()"></u-cell-item>
			</u-cell-group>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			pd(){
				uni.navigateTo({
					url:"./paidui"
				})
			}
		}
	}
</script>
<style>
</style>
