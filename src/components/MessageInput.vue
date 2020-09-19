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
    },
    currentUser() {
      return this.$store.getters.currentUser
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
      let payload = new TextMessage(this.currentUser, this.message, "sending")
      console.log(payload)
      this.$store.dispatch("sendMessage", payload)
      this.message = ""
    }
  }
}
</script>


