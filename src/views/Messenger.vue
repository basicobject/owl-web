<template>
  <div id="app" class="messaging">
    <AppLayout :users=users>
      <MessageView :messages=messages />
      <MessageInput v-on:newMessage="sendMessage" :nickname=nickname />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "../components/shared/layout/Default"
import MessageView from "../components/MessageView"
import MessageInput from "../components/MessageInput"
import TextMessage from "../models/TextMessage"

const wsUrl = "ws://127.0.0.1:1338/affirm"

export default {
  props: {
    nickname: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log("Mounted")
    this.wsConnect(wsUrl)
  },
  components: {
    AppLayout,
    MessageView,
    MessageInput
  },
  data () {
    return {
      users: [],
      messages: [],
      ws: null
    }
  },
  methods: {
    newUserJoined(name) {
      this.nickname = name
      this.users.push(name)
    },
    sendMessage(msg) {
      this.ws.send(msg.text)
      this.messages.push(msg)
    },
    receiveMessage(msg) {
      this.messages.push(msg)
    },
    wsConnect(url, retryAttempt = 0) {
      const that = this
      const ws = new WebSocket(wsUrl)
      this.ws = ws

      ws.onerror = (error) => alert("Websocket error: " + wsUrl)

      ws.onclose = (event) => {
        console.log(`Websocket connection failed, retrying ... ${retryAttempt}`)
        that.wsConnect(url, retryAttempt + 1)
      }

      ws.onopen = (event) => {
        const msg = `/nick ${this.nickname}`
        that.sendMessage(new TextMessage(this.nickname, msg))
        that.newUserJoined(this.nickname)
      }

      ws.onmessage = (event) => {
        that.receiveMessage(new TextMessage("Server", event.data))
      }
    }
  }
}
</script>
