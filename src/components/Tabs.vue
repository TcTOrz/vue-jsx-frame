<template>
  <el-tabs v-model="tabsValue" :closable="isclose" @tab-remove="removeTab" @tab-click="clickTab" type="card">
    <el-tab-pane
      v-for="(item) in tabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >{{ item.content }}</el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapGetters, /* mapActions */ } from 'vuex'
import Sortable from 'sortablejs'
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
  mounted() {
    this.rowDrop()
  },
  methods: {
    rowDrop() {
      const el = document.querySelector('.el-tabs__nav')
      const _this = this
      Sortable.create(el, {
        onEnd({ newIndex, oldIndex }) {                         //oldIIndex拖放前的位置， newIndex拖放后的位置
          const currRow = _this.tabs.splice(oldIndex, 1)[0]     //鼠标拖拽当前的el-tabs-pane
          _this.tabs.splice(newIndex, 0, currRow)               //tableData 是存放所有el-tabs-pane的数组
        }
      })
    },
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