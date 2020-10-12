<template>
  <div class="Home">
    <header-component></header-component>
    <tabs-component></tabs-component>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from '@/components/Header'
import tabsComponent from '@/components/Tabs'
export default {
  components: {
    headerComponent,
    tabsComponent
  }
}
</script>