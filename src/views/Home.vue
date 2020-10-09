<template>
  <div class="Home">
    <el-row>
      <el-col :span="2" style="height: 60px; position: inherit;">
        <div class="logo-bg"></div>
      </el-col>
      <el-col :span="20">
        <el-menu 
          mode="horizontal" 
          @select="handleSelect"
          background-color="#69c"
          text-color="#fff"
          active-text-color="#ffa"
          :default-active="activeIndex"
        >
          <el-menu-item index="首页">首页</el-menu-item>
          <el-submenu index="网元配置">
            <template slot="title">网元配置</template>
            <el-menu-item index='网元配置-设备列表'>设备列表</el-menu-item>
            <el-menu-item index='网元配置-站点维护'>站点维护</el-menu-item>
            <el-menu-item index='网元配置-VIP站点管理'>VIP站点管理</el-menu-item>
            <el-menu-item index='网元配置-站点资产管理'>站点资产管理</el-menu-item>
            <el-menu-item index='网元配置-电子地图'>电子地图</el-menu-item>
          </el-submenu>
          <el-submenu index="操作维护">
            <template slot="title">操作维护</template>
            <el-menu-item index='操作维护-设备监控'>设备监控</el-menu-item>
            <el-menu-item index='操作维护-轮询处理'>轮询处理</el-menu-item>
            <el-menu-item index='操作维护-轮询报告'>轮询报告</el-menu-item>
            <el-menu-item index='操作维护-上报信息查询'>上报信息查询</el-menu-item>
            <el-menu-item index='操作维护-人为开关告警查询'>人为开关告警查询</el-menu-item>
          </el-submenu>
          <el-submenu index="查询统计">
            <template slot="title">查询统计</template>
            <el-menu-item index='查询统计-设备完好率'>设备完好率</el-menu-item>
            <el-menu-item index='查询统计-实时告警列表'>实时告警列表</el-menu-item>
            <el-menu-item index='查询统计-延时告警列表'>延时告警列表</el-menu-item>
          </el-submenu>
          <el-submenu index="系统设置">
            <template slot="title">系统设置</template>
            <el-menu-item index='系统设置-示例菜单'>示例菜单</el-menu-item>
          </el-submenu>
          <el-menu-item index="帮助">帮助</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2" style="height: 60px; position: inherit;">
        <!-- <div class="search">

        </div> -->
        <div class="lists">
          <div class="search"></div>
          <div class="notify"></div>
        </div>
      </el-col>
    </el-row>

    
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '首页'
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style>
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