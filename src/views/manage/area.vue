<template>
  <div class="area-components-container">
  <el-tabs type="border-card">
  <el-tab-pane label="一区">一区</el-tab-pane>
  <el-tab-pane label="二区">二区</el-tab-pane>
  <el-tab-pane label="三区">三区</el-tab-pane>
  <el-tab-pane label="四区">四区</el-tab-pane>
</el-tabs>
  </div>
</template>
<script>
export default {
	 data() {
	 	return {
            id:''
	 	}
	 },
	 created() {
	 	const id = this.$route.params && this.$route.params.id
	 	this.id = id
	 }
}
</script>	
<style lang="scss" scoped>
.area-components-container{
	padding:25px;
}
</style>