<template>
  <div id="app" class="messaging">
    <AppLayout>
      <MessageView/>
      <MessageInput/>
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "../components/shared/layout/Default"
import MessageView from "../components/MessageView"
import MessageInput from "../components/MessageInput"
import TextMessage from "../models/TextMessage"
import User from "../models/User"
import ws from "../websocket"

export default {
  name: "messenger",
  mounted() {
    console.log(this.nickname)

    if (this.nickname.length === 0) {
      this.$router.push({ name: "home" })
      return
    }

    console.log("Mounted")
  },
  components: {
    AppLayout,
    MessageView,
    MessageInput
  },
  computed: {
    nickname() {
      return this.$store.getters.nickname
    }
  }
}
</script>
