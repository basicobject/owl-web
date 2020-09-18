<template>
  <div>
    <h2>Welcome to Owl Messenger</h2>

    <b-form v-on:submit.prevent="" inline>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="nickname" placeholder="Choose a nickname"></b-input>
      </b-input-group>
      <b-button variant="info" @click="gotoMessenger()">Go to messenger</b-button>
    </b-form>
  </div>
</template>

<script>
import ws from "../websocket"

export default {
  computed:  {
    nickname: {
      get() {
        return this.$store.getters.nickname
      },
      set(value) {
        this.$store.dispatch('setNickname', value)
      }
    }
  },
  methods: {
    gotoMessenger() {
      const that = this
      if(that.nickname.length === 0) { return; }
      console.log("nickname selected " + that.nickname)

      const onmessage = (event) => that.$store.dispatch("receiveMessage", event.data)
      ws.setMessageHandler(onmessage)
      ws.connect()

      setTimeout(() => {
        if(ws.isConnected) {
          that.$store.dispatch("join", that.nickname)
        } else {
          alert("Connection failed!! Check your internet connection")
        }

        that.$router.push({ name: "messenger" })
      }, 1000)
    }
  }
}
</script>

<style>
</style>
