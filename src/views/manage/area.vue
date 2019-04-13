<template>
  <div class="area-components-container">

 <div class="manage-tag">
     <el-tag type="success">待售(22)</el-tag>
     <el-tag>预定(22)</el-tag>
     <el-tag type="warning">安葬(22)</el-tag>
      <el-tag type="danger">已售(22)</el-tag>
 </div>

  <el-row>
  <div v-for="(o, index) in 10">
    	<span class="area-title">{{o}}</span>  
   <div class="area-item"> 
   	<el-col :xs="3" :sm="2" :md="1" v-for="(o, index) in 20" style="min-width: 65px;">
   <el-button v-waves type="success" class="area-btn" @click="cemetery(o)">{{ o }}</el-button>
  </el-col>
     </div>
  </div>
</el-row>

<el-dialog
  :title="title"
  :visible.sync="dialogVisible"
  width="80%"
  top="5vh"
  append-to-body>

  <el-tabs v-model="activeName" @tab-click="handleClick">
  	<el-tab-pane label="预定" name="res">
    <reserve :index="index"></reserve>
    </el-tab-pane>
  	<el-tab-pane label="碑文" name="mon">
    <monumen :index="index"></monumen>
    </el-tab-pane>
  </el-tabs>

</el-dialog>

  </div>
</template>
<script>
import waves from '@/directive/waves/index.js'
import Monumen from './monumen'
import Reserve from './reserve'
export default {
 directives: {
    waves
  },
 components: { Monumen , Reserve},
    data() {
	 	return {
      id:'',
      title:'',
      index:'',
      activeName:'res',
      dialogVisible:false
	 	}
	 },
    created() {
	 	  const id = this.$route.params && this.$route.params.id
	      this.id = id
	 },
     methods: {
          cemetery(v){
             this.dialogVisible = true
             this.title = '墓穴管理'
          },
         handleClick(tab, event) {
             this.index = tab.index
          }
     }
}
</script>	
<style lang="scss" scoped>
.area-components-container{
	padding:0 25px;
	.manage-tag{
		margin:20px 0px 15px 40px;
	}
	.manage-tag{
		.el-tag--medium {
	    height: 35px;
	    line-height: 35px;
	    font-size: 14px;
	    margin-left: 10px;
      }
	}
	.area-title{
		float:left;
	    font-size: 22px;
        height: 40px;
        line-height: 40px;
	    color: #666;
	    width: 30px;
	    text-align: center;
	    margin-right: 20px;
	}
	.area-item{
		margin-left: 50px;overflow:hidden;
		.area-btn{
			margin-bottom: 5px;min-width: 60px; height: 40px;
		}
	}
}
</style>