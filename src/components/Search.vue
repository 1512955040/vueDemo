<template>
	<div id="SeachThis">
		<input type="text" placeholder="请输入姓名" class="inps" v-model="textValue"/>
		<button class="btn" @click="SearFor(textValue)">搜索</button>
	</div>
</template>

<script>
	export default{
		name:"SeachThis",
		data(){
			return{
				textValue:""
			}
		},
		methods:{
			SearFor(textValue){
				this.$store.dispatch("reducise",textValue)
			}
		}
	}
</script>
	
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#SeachThis{
		margin-top: 26px;
	}
	.inps{
		width: 460px;
		height: 36px;
	}
	.btn{
	    width: 50px;
	    line-height: 36px;
	    text-align: center;
	    margin-left: 8px;
	    background: #009CD5;
	    border: none;
	    color: #fff;
	    font-size: 14px;
	    box-sizing: border-box;
	}
	
</style>