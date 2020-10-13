<template>
  <el-tabs v-model="tabsValue" closable @tab-remove="removeTab" @tab-click="clickTab">
    <el-tab-pane
      v-for="(item) in tabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >{{ item.content }}</el-tab-pane>
  </el-tabs>
</template>

<script>
// import jsonData from '@/assets/routeDirec.json'
import { mapGetters, /* mapActions */ } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'tabs',
      'activeIndex'
    ]),
    tabsValue: {
      get: function() {
        return this.$store.state.tabsValue
      },
      set: function(tab) {
        let obj = _.find(this.tabs, function(o) {
          return o.title === tab
        })
        if (!obj) return 
        this.$store.state.tabsValue = obj.name
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    async removeTab(targetName) {
      await this.$store.dispatch({ type: 'removeTab', targetName })
      this.$router.push({ path: this.activeIndex })
    },
    clickTab(tag) {
      this.$router.push({ path: tag.name })
    }
  },
}
</script>

<style>
  .el-tabs__header {
    margin: 0;
  }
</style>