<template>
	<div class="love">
		<div class="life">
			<img src="../assets/1.jpg"/>
			<img src="../assets/2.jpg"/>
			<img src="../assets/3.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'jdlove'
	}
</script>
<style scoped>
	.love{
		width: calc(100% - 100px);
		float: right;
	}
	img{
		display: block;
		width: 100%;
		height: 150px;
	}
</style>