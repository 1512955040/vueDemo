<template>
  <div id="app">
 			
 			<!-- <SeachThis></SeachThis>
 			<HeaderTitle></HeaderTitle>
  		<Listone></Listone>
  		<newfile></newfile> -->
      <router-view></router-view>
  </div>
</template>
<script>
// import SeachThis from "./components/Search.vue";
// import HeaderTitle from "./components/header.vue";
// import Listone from "./components/Listone.vue";
// import newfile from "./components/newfile.vue";
export default {
  name: 'App',
  components: {
  	// SeachThis,
  	// HeaderTitle,
   //  Listone,
   //  newfile
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
