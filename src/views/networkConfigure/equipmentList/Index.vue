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