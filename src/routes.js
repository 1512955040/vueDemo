import Index from './index.vue'
import newfile from "./components/newfile.vue";

export default[
	{
		path:"/",
		component:Index,
	},
	{
		path:'/index',
		component:Index,
	},
	{
		path:"/list/:id",
		component:newfile
	},
	{
		path:'/newfile',
		component:newfile
	}
]
