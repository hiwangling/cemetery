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
        prop="id"
        label="编号"
        align="center"
        width="60"
      />
      <el-table-column
        prop="name"
        label="名称"
        align="center"
        width="100"
      />
      <el-table-column
        prop="vcdesc"
        label="描述"
      />
      <el-table-column
        prop="create_time"
        label="创建时间"
        align="center"
        width="200"
      />
      <el-table-column
        prop="status"
        label="状态"
        align="center"
        width="150"
      >
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
  </div>
</template>

<script>
import { getList } from '@/api/cemetery'
import waves from '@/directive/waves'

export default {
  directives: { waves },
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
      listLoading: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.list.data
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
