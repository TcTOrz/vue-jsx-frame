<template>
  <el-container class="equipmentList-class">
    <el-main>
      <el-row class="equipmentList-heaser-class">
        <el-col :span="24">
          <el-card shadow="hover">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-input v-model="input" placeholder="输入设备名称、电话号码、直放站编号搜索" size="small"></el-input>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" size="small">查询</el-button>
              </el-col>
              <el-col :span="10" :offset="8">
                <el-button type="text" size="small"><i class="el-icon-refresh"></i>刷新</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-folder-add"></i>新增</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-folder-delete"></i>删除</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-monitor"></i>设为工程</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-check"></i>开通</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-upload2"></i>导出</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-edit"></i>设置过滤条件</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-document"></i>定制显示列</el-button>
                <span class="color-grey-class">&nbsp;|&nbsp;</span>
                <el-button type="text" size="small"><i class="el-icon-coin"></i>设备详细信息</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
      <el-row class="equipmentList-table-class">
        <el-col :span="24">
          <el-table
            :data="tableData"
            max-height="500"
            border
            style="width: 100%"
            size="mini"
            stripe
            >
            <el-table-column
              v-for="(item, index) in tableHeader" :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
            >
              <template slot-scope="scope">
                <span v-if="item.prop==='设备状态'">
                  <i class="el-icon-star-on" :class="scope.row[item.prop]==='正常'? 'color-green-class': 'color-grey-class'"></i>
                </span>
                &nbsp;
                <span>{{scope.row[item.prop]}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="pageSizes"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      tableHeader: [
        {prop: "设备ID", label: "设备ID", width: 150},
        {prop: "直放站编号", label: "直放站编号", width: 150},
        {prop: "设备编号", label: "设备编号", width: 150},
        {prop: "设备名称", label: "设备名称", width: 150},
        {prop: "设备状态", label: "设备状态", width: 150},
        {prop: "设备电话", label: "设备电话", width: 150},
        {prop: "设备IP", label: "设备IP", width: 150},
        {prop: "查询电话", label: "查询电话", width: 150},
        {prop: "供应商", label: "供应商", width: 150},
        {prop: "设备类型", label: "设备类型", width: 150},
        {prop: "协议类型", label: "协议类型", width: 150},
        {prop: "备注", label: "备注"},
      ],
      tableData: [],
      currentPage: 1,
      pageSizes: [10, 20, 30, 40],
      pageSize: 10,
      // total: 400
    }
  },
  computed: {
    total() {
      let num = this.tableData.length
      return num
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted() {
    this.axios.get(process.env.VUE_APP_URL+'/api/networkEquipTableMock').then((res) => {
      this.tableData = res.data.array
    })
  }
}
</script>

<style>
  .grey {
    color: #ccc;
  }
  .equipmentList-class .el-card__body {
    padding: 10px;
  }
  .equipmentList-heaser-class, 
  .equipmentList-table-class {
    margin-bottom: 20px;
  }
  .color-green-class {
    color: greenyellow;
  }
  .color-grey-class {
    color: #ccc;
  }
</style>