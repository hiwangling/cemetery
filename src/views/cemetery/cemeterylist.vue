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
        width="100"
      />
      <el-table-column
        prop="name"
        label="名称"
        align="center"
      />
      <el-table-column
        prop="garden_name"
        label="墓园"
        align="center"
        width="150"
      />
      <el-table-column
        prop="area_name"
        align="center"
        width="100"
        label="墓区"
      />
      <el-table-column
        prop="type_name"
        align="center"
        width="150"
        label="墓位类型"
      />
      <el-table-column
        prop="style_name"
        align="center"
        width="200"
        label="墓穴样式"
      />
      <el-table-column
        prop="usestatus"
        label="状态"
        align="center"
        width="150"
      >
        <template slot-scope="{row}">
          <el-tag :type="row.usestatus | statusFilter">
            {{ usestatus[row.usestatus] }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="sellprice"
        align="center"
        width="100"
        label="销售价格"
      />
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import { CemeteryList } from '@/api/cemetery'
import waves from '@/directive/waves'
import Pagination from '@/components/Pagination'

export default {
  directives: { waves },
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: 'success',
        2: 'info',
        3: 'warning',
        4: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      search: '',
      total: 0,
      usestatus: [],
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
      CemeteryList(this.listQuery).then(response => {
        this.list = response.list.data
        this.usestatus = response.usestatus
        this.total = response.list.total
        this.listLoading = false
      })
    },
    handleCreate() {

    },
    handleFilter() {
      this.getList()
    }
  }
}
</script>
