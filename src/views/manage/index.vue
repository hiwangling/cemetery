<template>
  <div class="manage-components-container">
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col v-for="(o, index) in 10" :span="6">
        <router-link :to="'/manage/area/'+o" class="">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{ manage.title }}</span>
            </div>
            <div class="component-item">
              <img :src="manage.img" alt="" class="image">
            </div>
            <div class="manage-tag">
              <el-tag type="success">待售(22)</el-tag>
              <el-tag>预定(22)</el-tag>
              <el-tag type="warning">安葬(22)</el-tag>
              <el-tag type="danger">已售(22)</el-tag>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import waves from '@/directive/waves/index.js'
export default {
  name: 'Reserve',
  directives: {
    waves
  },
  data() {
    return {
      manage: {
      	title: '一区(玫瑰园 )',
        img: 'http://118.25.216.16:88/upload/picture/20181012/2cb24160fd37a94b20d09ce4cca901dd.jpg'
      }
    }
  }
}
</script>
 <style lang="scss" scoped>
 .manage-components-container{
 padding: 0 20px;
 min-height: calc(100vh - 84px);
	 .box-card{
	 padding:5px;
	 margin-top:10px;
	   .el-card__body{
	   	padding:5px;
	   }
	 }
   .component-item{
   min-height: 100px;
   }
    .image {
    width: 100%;
    display: block;
  }
  .manage-tag{
  	margin-top:10px;text-align: center;
  	.el-tag--medium{
  		    margin-right: 10px;
  		    margin-bottom:5px;
  	}
  }
 }

 </style>
