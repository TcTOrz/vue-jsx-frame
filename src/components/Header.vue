<template>
  <el-row>
    <el-col :span="2" style="height: 60px; position: inherit;">
      <div class="logo-bg"></div>
    </el-col>
    <el-col :span="20">
      <!-- <navbar-component></navbar-component> -->
      <el-menu 
        mode="horizontal" 
        @select="handleSelect"
        background-color="#69c"
        text-color="#fff"
        active-text-color="#ffa"
        :default-active="activeIndex"
        :router="true"
      >
        <el-menu-item index="/0">首页</el-menu-item>
        <el-submenu index="/1">
          <template slot="title">网元配置</template>
          <el-menu-item index='/1/0'>设备列表</el-menu-item>
          <el-menu-item index='/1/1'>站点维护</el-menu-item>
          <el-menu-item index='/1/2'>VIP站点管理</el-menu-item>
          <el-menu-item index='/1/3'>站点资产管理</el-menu-item>
          <el-menu-item index='/1/4'>电子地图</el-menu-item>
        </el-submenu>
        <el-submenu index="/2">
          <template slot="title">操作维护</template>
          <el-menu-item index='/2/0'>设备监控</el-menu-item>
          <el-menu-item index='/2/1'>轮询处理</el-menu-item>
          <el-menu-item index='/2/2'>轮询报告</el-menu-item>
          <el-menu-item index='/2/3'>上报信息查询</el-menu-item>
          <el-menu-item index='/2/4'>人为开关告警查询</el-menu-item>
        </el-submenu>
        <el-submenu index="/3">
          <template slot="title">查询统计</template>
          <el-menu-item index='/3/0'>设备完好率</el-menu-item>
          <el-menu-item index='/3/1'>实时告警列表</el-menu-item>
          <el-menu-item index='/3/2'>延时告警列表</el-menu-item>
        </el-submenu>
        <el-submenu index="/4">
          <template slot="title">系统设置</template>
          <el-menu-item index='/4/0'>示例菜单</el-menu-item>
        </el-submenu>
        <el-menu-item index="/5">帮助</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="2" style="height: 60px; position: inherit;">
      <div class="lists">
        <div class="search"></div>
        <div class="notify"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, /* mapActions */ } from 'vuex'

export default {
  computed: mapGetters([
    'activeIndex'
  ]),
  methods: {
    handleSelect(index, indexPath) {
      this.$store.dispatch({ type: 'handleSelect', index, indexPath})
    }
  }
}
</script>

<style scoped>
  .logo-bg {
    background-color: #69c;
    height: 100%;
    background-image: url('../assets/u388.png');
    background-size: 70% 60%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .lists {
    height: 100%;
    background-color: #69c;
    display: flex;
  }
  .search {
    background-image: url('../assets/u397.png');
    background-size: 20% 25%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
  .notify {
    background-image: url('../assets/u395.png');
    background-size: 20% 25%;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
  }
</style>