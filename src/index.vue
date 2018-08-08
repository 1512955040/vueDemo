<template>
	<div id="hIndex">
		<div class="picTitle">用户列表</div>
		<SeachThis></SeachThis>
 		<HeaderTitle></HeaderTitle>
  		<Listone></Listone>
	</div>
</template>

<script>
	import SeachThis from "./components/Search.vue";
	import HeaderTitle from "./components/header.vue";
	import Listone from "./components/Listone.vue";
	export default{
		name:"Index",
		components:{
			SeachThis,
		  	HeaderTitle,
		    Listone,
		}
	}
</script>

<style scoped>
.picTitle{
	width: 100%;
	height: 36px;
	text-align: center;
	background: deepskyblue;
	line-height: 36px;
	color: white;
}
</style>