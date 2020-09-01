<template>
  <div>
      <b-form-input v-model="message" placeholder="Type something ..." @keydown.enter="sendMessage()"></b-form-input>
  </div>
</template>

<script>
import TextMessage from "../models/TextMessage"

export default {
  computed: {
    nickname() {
      return this.$store.getters.nickname
    }
  },

  data() {
    return {
      message: ""
    }
  },

  methods: {
    sendMessage() {
      console.log("Sending " + this.message)
      this.$store.dispatch("newMessage", new TextMessage(this.nickname, this.message))
      this.message = ""
    }
  }
}
</script>


