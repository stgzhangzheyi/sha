<template>
	<div class="jd">
		
		<!-- 二级路由 -->
		<router-view></router-view>

		<div class="tabs">
			<div class="shou" @click="goRouter({name: 'jdhome'})">首页</div>
			<div class="fa" @click="goRouter({name: 'jdfind'})">发现</div>
			<div class="gou" @click="goRouter({name: 'jdshopcart'})">购物车</div>
			<div class="my" @click="goRouter({name: 'jdmine'})">我的</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jd',

		methods: {
			goRouter(params) {
				this.$router.push(params);
			}
		}
	}
</script>

<style scoped>
	.tabs{
		position: fixed;
		width: 100%;
		left: 0;
		bottom: 0;
		border-top: 1px solid #ddd;
	}
	.tabs>div{
		float: left;
		width: 25%;
		height: 46px;
		font-size: 14px;
		text-align: center;
		line-height: 46px;
		color: #333;
	}
	
</style>