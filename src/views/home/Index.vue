<template>
  <div class="Home">
    <header-component></header-component>
    <tabs-component></tabs-component>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
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