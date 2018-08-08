<template>
	<div id="HeaderTitle">
		<ul>
			<li>姓名</li>
			<li>年龄</li>
			<li>电话</li>
			<li>操作</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"HeaderTitle"
	}
</script>

<style scoped>
	#HeaderTitle{
		margin-top: 36px;
	}
	ul{
		width: 100%;
		background: grey;
		height: 36px;
	}
	ul li{
		width: 25%;
		height: 36px;
		float: left;
		list-style: none;
		text-align: center;
		line-height: 36px;
	}
	
</style>