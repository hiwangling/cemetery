<template>
  <div>
    <el-button type="primary" class="filter-container" icon="el-icon-edit" @click="dialogFormVisible = true">预定登记</el-button>

    <el-dialog
      :title="dialogStatus"
      :visible.sync="dialogFormVisible"
      top="5vh"
      append-to-body
    >
      <el-form id="server" ref="reserve" :inline="true" :model="reserve" class="demo-form-inline">
        <el-form-item label="预订的人" prop="buyer">
          <el-input v-model="reserve.buyer" name="buyer" class="reserve" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="reserve.phone" />
        </el-form-item>
        <el-form-item label="预定时间" prop="ordainbegin">
          <el-date-picker v-model="reserve.ordainbegin" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="到期日期" prop="ordainend">
          <el-date-picker v-model="reserve.ordainend" placeholder="选择时间" value-format="yyyy-MM-dd" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="联系邮箱">
          <el-input v-model="reserve.email" />
        </el-form-item>
        <el-form-item label="联系地址">
          <el-input v-model="reserve.address" />
        </el-form-item>
        <el-form-item label="逝者关系" prop="relation">
          <el-input v-model="reserve.relation" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary">确定</el-button>
        <el-button @click="dialogFormVisible = false">关闭</el-button>
      </div>
    </el-dialog>

    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    />
  </div>
</template>

  	<script>
import { listReserve, createReserve, updateReserve, deleteReserve } from '@/api/reserve'
export default {
  name: 'Reserve',
  props: {
    index: {
      type: String,
      default: 0
    }
  },
  data() {
    return {
      buyer: '',
      id: '',
      ordainbegin: '',
      ordainend: '',
      phone: '',
      ordainprice: '',
      email: '',
      sfz: '',
      sex: '',
      address: '',
      relation: '',
      ordaintype: '',
      sellname: '',
      vcdesc: '',
      listLoading: true,
      list: undefined,
      total: 0,
      dialogFormVisible: false,
      dialogStatus: '登记',
      reserve: {
        buyer: ''
      },
      listQuery: {
        cid: 5226,
        page: 1,
        limit: 20,
        id: undefined,
        name: undefined,
        sort: 'add_time',
        order: 'desc'
      }
    }
  },
  watch: {
    index: function(oldVal, newVal) {
      if (oldVal == 0) {
        this.getList()
      }
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
  }
}
</script>
<style scoped>
 #reserve .el-input,
 #reserve .el-form-item__content,
 {
     width: 150px;
  }
.reserve .el-input__inner{
    width: 150px;
  }

</style>
