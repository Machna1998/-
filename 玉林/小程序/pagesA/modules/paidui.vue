<template>
	<view class="pd">
		<u-cell-group>
			<u-cell-item title="网点名称" value="我问问 " :arrow="false"></u-cell-item>
			<u-cell-item title="网点编码" value="新版本" :arrow="false"></u-cell-item>
			<u-cell-item title="业务类型" value="新版本" :arrow="false"></u-cell-item>
			<u-cell-item title="联系电话" value="2345678"  :arrow="false" >
				<u-icon slot="right-icon" size="36"color="#2979ff" name="phone-fill" ></u-icon>
			</u-cell-item>
			<u-cell-item title="服务时间" value="新版本" :arrow="false"></u-cell-item>
			<u-cell-item title="网点地址" value="新版本" :arrow="false">
					<u-icon slot="right-icon" size="36"color="#2979ff" name="map-fill" ></u-icon>
			</u-cell-item>
		</u-cell-group>
		
		<button type="primary">更新排队情况</button>
	</view>
</template>

<script>
</script>

<style>
</style>
