<template>
	<div class="bad">
		<div class="boy">
			<img src="../assets/7.jpg"/>
			<img src="../assets/8.jpg"/>
			<img src="../assets/9.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jdbad'
	}
</script>
<style scoped>
	.bad{
		height:100%;
		width: calc(100% - 100px);
		background-color: #ccff99;
		float: right;
	}
	img{
		display: block;
		width: 100%;
		height: 150px;
	}
</style>