<template>
	<div id="ListOne">
		<ul v-for="(Context,index) in show">
			<li>{{Context.name}}</li>
			<li>{{Context.age}}</li>
			<li>{{Context.tel}}</li>
			<li>
				<!-- <router-link >跳转</router-link> -->
				<router-link class="btns1" tag="button" :to="{path:'/list/'+Context.id,params:{id:Context.id}}">编辑</router-link>
				<!-- <button class="btns1">编辑</button> -->
				<button class="btns2" @click="btnsa(Context)">删除</button>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"ListOne",
		data(){
			return{
				appexts:null
			}
		},
		created(){
			if(!this.$store.state._isones){
				this.axios.get("../static/mock/users.json").then(data =>{
					this.$store.dispatch("reducisea",data.data.data)
					this.$store.dispatch("reducisen",data.data.data)
					this.appexts=this.$store.state.tempData
				})
			}
			//因为数据写死的，不能再请求了，请求一次
				this.$store.commit("_aaccdd")
		},
		computed:{
			show(){
				return this.$store.state.tempData
			}
		},
		methods:{
			btnsa(Context){
				this.$store.dispatch("reducisef",Context)
			}
		}
	}
</script>
<style scoped>
	ul{
		width: 100%;
		height: 36px;
	}
	ul li{
		width: 25%;
		height: 36px;
		list-style: none;
		float: left;
		text-align: center;
		box-sizing: border-box;
		line-height: 36px;
		border: 1px solid grey;
	}
	.btns1, .btns2{
		width:55px;
		height: 28px;
		background: deepskyblue;
		text-align: center;
		line-height: 28px;
		border: none;
		color: white;
		cursor: pointer;
	}
	.btns2{
		background: red;
	}
</style>