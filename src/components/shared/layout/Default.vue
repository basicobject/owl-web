<template>
  <div class="default-layout">
    <Header/>
    <b-container fluid>
      <b-row class="mt-3">
        <b-col cols="4">
          <Sidebar :users=users />
        </b-col>
        <b-col cols="8">
          <slot></slot>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import Vue from 'vue'
  import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
  import Header from "../Header"
  import Sidebar from "../Sidebar"

  import "bootstrap/dist/css/bootstrap.css"
  import "bootstrap-vue/dist/bootstrap-vue.css"

  Vue.use(BootstrapVue)
  Vue.use(IconsPlugin)
  Vue.use(LayoutPlugin)

  export default {
    props: { users: Array },
    components: {
      Header,
      Sidebar
    }
  }
</script>

<style lang="scss">
</style>

