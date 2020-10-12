<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="24">
          <el-card shadow="hover">
            <el-row :gutter="20">
              <el-col :span="4">
                <el-input v-model="input" placeholder="" size="small"></el-input>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" size="small">查询</el-button>
              </el-col>
              <el-col :span="10">
                <el-button type="text"><i class="el-icon-refresh"></i>刷新</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-folder-add"></i>新增</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-folder-delete"></i>删除</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-monitor"></i>设为工程</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-check"></i>开通</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-upload2"></i>导出</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-edit"></i>设置过滤条件</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-document"></i>定制显示列</el-button>
                <span class="grey">&nbsp;|&nbsp;</span>
                <el-button type="text"><i class="el-icon-coin"></i>设备详细信息</el-button>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
}
</script>

<style>
  .grey {
    color: #ccc;;
  }
</style>