<template>
  <b-list-group>
    <b-list-group-item class="flex-column align-items-start" v-for="(message, index) in messages" :key="index">
      <div class="d-flex w-100 justify-content-between">
        <p class="mb-1 text-muted"><timeago :datetime="message.createdAt" :auto-update="60"></timeago></p>
        <small class="text-muted">{{ message.state }}</small>
      </div>

      <p class="mb-1">
        <em>{{ message.sender.nickname }}</em> : <span>{{ message.text }}</span>
      </p>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
  import Vue from 'vue'
  import VueTimeago from 'vue-timeago'

  Vue.use(VueTimeago, {
    name: 'timeago', // component name, `timeago` by default
    locale: 'en'
  })

  export default {
    name: "messageListView",
    computed: {
      messages() { return this.$store.getters.messages }
    }
  }
</script>

<style>
  .sender {
    text-align: left;
  }

  .receiver {
    text-align: right;
  }

</style>
