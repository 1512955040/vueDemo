import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store =new Vuex.Store({
	strict:true,
	state:{
		data:[],
		tempData:[],
		_isones:false
	},
	mutations:{
		//判断是不是第一次登陆
		_aaccdd:function(state){
			state._isones=true;
		},
		//如果点击取消的话，要变成false，否则点击取消也会改变类表中的数值
		_eeffgg:function(state){
			state._isones=false
		},
		//再次创建一个空数组，接收改变的数据
		initData:function(state,payload){
			state.tempData = payload;
		},
		//后台传过来的初始数据，data值是不变的
		geterer:function(state,payload){
			state.data=payload
		},
		//点击搜索
		reduceGouwc:function(state,payload){
			let a=state.data.filter(products=>{
				if(products.name.match(payload)){
					return products
				}
				else if(payload==""){
					return products
				}
			})
			state.tempData = a;
		},
		//点击编辑
		reduceGourse:function(state,payload){
			state.tempData.find((keysvalue)=>{
				if(payload.id==keysvalue.id){
					payload.users.name=keysvalue.name;
					payload.users.tel=keysvalue.tel;
					payload.users.id=keysvalue.id;
				}
			})
		},
		//点击保存
		aaannn:function(state,payload){
//			console.log(users.id)
			for(let i=0;i<state.tempData.length;i++){
				if(state.tempData[i].id==payload.id){
					state.tempData[i].name=payload.name;
					state.tempData[i].tel=payload.tel;
				}
			}
		},
		//点击删除
		bbbaaa:function(state,payload){
			console.log(payload)
			state.tempData.splice(payload,1)
		}
	},
	actions:{
		//点击编辑
		reducisep:(context,payload)=>{
			context.commit("reduceGourse",payload)
		},
		//点击保存
		reduciseb:(context,payload)=>{
			context.commit("aaannn",payload)
		},
		//点击删除
		reducisef:(context,payload)=>{
			context.commit("bbbaaa",payload)
		},
		reducisea:(context,payload)=>{
			context.commit("initData",payload)
		},
		reducisen:(context,payload)=>{
			context.commit("geterer",payload)
		},
		reducise:(context,payload)=>{
			context.commit("reduceGouwc",payload)
		}
	}
})
