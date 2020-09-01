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
    const user = new User(this.nickname)
    const that = this

    if(ws.isConnected) {
      that.$store.dispatch("addUser", user)
      ws.receiveHandler((event) => {
        that.$store.dispatch("receiveMessage", new TextMessage("Server", event.data))
      })

    } else {
      console.log("Connection failed")
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
