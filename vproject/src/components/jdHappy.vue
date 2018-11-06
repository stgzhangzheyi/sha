<template>
	<div class="happy">
		<div class="banana">
			<img src="../assets/4.jpg"/>
			<img src="../assets/5.jpg"/>
			<img src="../assets/6.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jdhappy'
	}
</script>
<style scoped>
	.happy{
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