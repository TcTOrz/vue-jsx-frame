<template>
  <el-tabs v-model="tabsValue" :closable="isclose" @tab-remove="removeTab" @tab-click="clickTab">
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
    },
    isclose() {
      if (this.tabs.length === 1) {
        return false
      }
      return true
    }
  },
  data() {
    return {
      closable: false
    }
  },
  methods: {
    async removeTab(targetName) {
      await this.$store.dispatch({ type: 'removeTab', targetName })
      this.$router.push({ path: this.activeIndex })
      
    },
    clickTab(tag) {
      this.$router.push({ path: tag.name })

      let index = tag.name,
        indexPath = []
      if (index.slice(1).split('/').length === 2) {
        indexPath = ['/'+index.slice(1).split('/')[0], index]
      } else {
        indexPath = [index]
      }
      this.$store.dispatch({ type: 'handleSelect', index, indexPath})
    }
  },
}
</script>

<style>
  .el-tabs__header {
    margin: 0;
  }
</style>