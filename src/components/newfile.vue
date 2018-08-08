<template>
	<div id="newfile">
		<div class="picTitle">用户编辑</div>
		<p>姓名</p>
		<input type="text" v-model="users.name" class="inps"/>
		<p>手机</p>
		<input type="text" v-model="users.tel" class="inps"/>
		<!--<router-link tag="button"  @click="aabbcc(users)" :to="{path:'/'}">保存</router-link>-->
		<div class="hello">
			<button @click="aabbcc(users)">保存</button>
			<button @click="bbccdd">取消</button>
		</div>
	</div>
</template>
<script>
	export default{
		name:"newfile",
		data(){
			return{
				users:{}
			}
		},
		created(){
			this.userss(this.users,this.$route.params.id)
		},
		methods:{
			userss:function(users,ids){
				this.$store.dispatch("reducisep",{users:users,id:ids})
			},
			//点击保存
			aabbcc:function(users){
				this.$store.dispatch("reduciseb",users)
				this.$router.back(-1)
			},
			bbccdd:function(){
				this.$store.commit("_eeffgg");
				this.$router.back(-1);
			}
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
.picTitle p{
	margin-top: 5px;
}
.inps{
	width: 100%;
	height: 36px;
	margin-top: 15px;
}
.hello{
	text-align: center;
	margin-top: 15px;
}
.hello button{
	border: none;
	width: 56px;
	height: 36px;
	background: orangered;
	color: white;
	cursor: pointer;
}
.hello button:nth-child(2){
	background: green;
}
</style>