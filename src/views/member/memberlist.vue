<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="search" placeholder="名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" size="medium" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        新增
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column
        prop="userno"
        label="工号"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="姓名"
        align="center"
        width="150">
       </el-table-column>
      <el-table-column
        prop="branch_name"
        label="部门"
        align="center"
        width="200"> 
      </el-table-column>
      <el-table-column
        prop="gradename"
        label="岗位"
        align="center"
        width="200"> 
      </el-table-column>
       <el-table-column
        prop="sex"
        label="性别"
        align="center"
        width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.sex == 1 ? '男' : '女'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话"
        align="center"
        width="100"> 
      </el-table-column>
      <el-table-column
        prop="icno"
        label="身份证"> 
      </el-table-column>
      <el-table-column
        prop="is_inside"
        label="优惠审批"
        align="center"
        width="100"> 
          <template slot-scope="scope">
          <span style="color: red">{{ scope.row.is_inside == 1 ? '是' : '否'}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        align="center"
        width="150">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status == 1 ? '启用' : '停用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-button type="danger" @click="handleModifyStatus(row,'deleted')">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import { memberList } from '@/api/member'
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'

export default {
  directives: { waves },
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'info'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      search: '',
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      memberList(this.listQuery).then(response => {
        this.list = response.list.data
        this.total = response.list.total
        this.listLoading = false
      })
    },
    handleUpdate(row) {

    },
    handleModifyStatus(row) {

    },
    handleCreate() {

    },
    handleFilter() {
      this.getList()
    }
  }
}
</script>
