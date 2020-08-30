<template>
  <div class="no-sidebar-layout">
    <Header/>
    <b-container fluid>
      <slot></slot>
    </b-container>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
  import Header from "../Header"

  import "bootstrap/dist/css/bootstrap.css"
  import "bootstrap-vue/dist/bootstrap-vue.css"

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(LayoutPlugin)

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
</style>

