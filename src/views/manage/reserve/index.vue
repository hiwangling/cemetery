  <template> 
   <div>
       <el-table
      :data="list"
      border
      fit
      highlight-current-row>
    </el-table>
   </div>
  </template>

  	<script>
 import { listReserve, createReserve, updateReserve, deleteReserve } from '@/api/reserve'
export default {
name: 'reserve',
props: {
    index: {
      type: String,
      default: 0
    },
  },
data() {
   return { 
       listLoading:true,
       list: undefined,
       total: 0,
       listQuery: {
        cid:5226,
        page: 1,
        limit: 20,
        id: undefined,
        name: undefined,
        sort: 'add_time',
        order: 'desc'
      },
  }
 },
 created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      listReserve(this.listQuery)
        .then(res => {
          console.log(res)
          this.listLoading = false
        })
        .catch(() => {
          this.list = []
          this.total = 0
          this.listLoading = false
        })
    }
  },
  watch: {
    index:function(oldVal,newVal){
      if(oldVal == 0){
        this.getList()
      }
    }
  }
}
</script>
<style>

</style>
