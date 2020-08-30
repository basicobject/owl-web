<template>
  <b-list-group>
    <b-list-group-item v-for="(message, index) in messages" :key="index">{{message.sender}} said {{ message.text }}</b-list-group-item>
  </b-list-group>
</template>

<script>
  export default {
    props: {
      messages: Array
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
