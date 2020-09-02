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

    const pingInterval = 5000

    const user = new User(this.nickname)
    const that = this
    const onmessage = (event) => {
      if (event.data.startsWith("/")) {
        console.log("Command message received " + event.data)
      }
      else {
        that.$store.dispatch("receiveMessage", new TextMessage(new User("Server"), event.data, "received"))
      }
    }

    ws.setMessageHandler(onmessage)
    ws.connect()

    if(ws.isConnected) {
      that.$store.dispatch("setCurrentUser", user)
      that.$store.dispatch("addUser", user)
      clearInterval(pingInterval)
      setInterval(() => that.$store.dispatch("ping"), pingInterval)

    } else {
      alert("Connection failed!! Check your internet connection")
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
