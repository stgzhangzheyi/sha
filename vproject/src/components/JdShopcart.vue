<template>
	<div>
		<router-view></router-view>
		<div class="apple">
			<!-- <div @click="toNext({name: 'jdlove'})">你好</div>
			<div @click="toNext({name: 'jdhappy'})">我好</div>
			<div @click="toNext({name: 'jdbad'})">它好</div> -->
			<ul>
				<li @click="toNext({name: 'jdlove'})">林允儿</li>
				<li @click="toNext({name: 'jdhappy'})">秀智</li>
				<li @click="toNext({name: 'jdbad'})">允儿</li>
				<!-- <li @click="toNext({name: 'jdbad'})">美女</li>
				<li @click="toNext({name: 'jdbad'})">美人</li> -->
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jdshopcart',
		methods:{
			toNext:function(params){
				this.$router.push(params);
			}
		}
	}
</script>
<style scoped>
	body{
		font-size: 16px;
		height: 100%;
	}
	.apple{
		width: 100px;
		overflow: hidden;
		/*height: calc(100% - 1px - 46px);*/
	}
	ul{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	li{
		width: 100px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background-color: rgba(193,212,122,.5);
	}
	/*.apple>div{
		height: 50px;
		background-color: red;
		text-align: center;
		line-height: 50px;
	}*/
</style>