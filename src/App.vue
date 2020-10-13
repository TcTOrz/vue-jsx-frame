<template>
  <div id="app">
    <!-- <router-link to="/about">about</router-link>
    <router-link to="/">/home</router-link> -->
    <!-- <div v-if="loggedIn">
    </div> -->
    <!-- <header-component></header-component>
    <tabs-component></tabs-component> -->
<!--     <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition> -->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
// import auth from '@/router/auth'
// import headerComponent from '@/components/Header'
// import tabsComponent from '@/components/Tabs'
export default {
  // components: {
  //   headerComponent,
  //   tabsComponent
  // },
  // data() {
    // return {
    //   loggedIn: false
    // }
  // },
  // mounted() {
  //   this.loggedIn = auth.loggedIn()
  // },
  created() {
    // 带pathname刷新页面时
    let url = window.location.pathname;
    if (url === '/') return
    this.$store.dispatch({ type: 'handleSelect', index: url, indexPath: ['/'+url.slice(1).split('/')[0], url] })
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
body {
  width: 100%;
  margin: 0;
}
</style>
