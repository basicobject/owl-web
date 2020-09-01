<template>
  <b-list-group>
    <b-list-group-item v-for="(message, index) in messages" :key="index">{{message.sender}} : {{ message.text }}</b-list-group-item>
  </b-list-group>
</template>

<script>
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
