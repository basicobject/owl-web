import Vue from "vue"
import Vuex from "vuex"
import ws from "../websocket"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    wsUrl: "ws://127.0.0.1:1338/affirm",
    nickname: "",
    users: [],
    messages: [],
    currentUser: null,
  },
  getters: {
    nickname: (state) => { return state.nickname },
    users: (state) => { return state.users },
    messages: (state) => { return state.messages },
    currentUser: (state) => { return state.currentUser }
  },
  mutations: {
    setNickname: (state, value) => state.nickname = value,
    setCurrentUser: (state, user) => state.currentUser = user,
    addUser: (state, user) => state.users.push(user),
    newMessage: (state, message) => state.messages.push(message),
    setSessions: (state, users) => state.users = users
  },
  actions: {
    setNickname: (context, value) => context.commit("setNickname", value),
    setCurrentUser: (context, user) => context.commit("setCurrentUser", user),
    addUser: (context, user) => {
      if (context.state.users.find((u) => u.nickname === user.nickname ) === undefined) {
        context.commit("addUser", user)
      } else {
        console.log(`User ${user.nickname} already exists`)
      }
    },
    newMessage: (context, message) => {
      if (ws.isConnected()) {
        ws.send(message.text)
        message.state = "sent"
      } else {
        message.state = "not_sent"
        ws.disconnect()
      }

      context.commit('newMessage', message)
    },
    receiveMessage: (context, message) => {
      console.log("Got message")
      console.log(message)

      let response = JSON.parse(message)

      switch(response.event) {
        case "JOIN":
          console.log(response.body)
          context.commit("setSessions", response.body.SessionInfo.sessions)

          const currentUser = response.body.SessionInfo.sessions.find((s) => s.nickname == context.state.nickname)
          context.commit("setCurrentUser", currentUser)

          const pingInterval = 5000
          const that = this

          clearInterval(pingInterval)
          setInterval(() => store.dispatch("ping"), pingInterval)

          break;
        case "PONG":
          console.log("PONG")
          break;
        case "PLAIN":
          console.log(response.body)
          break;
        default: console.log("Unknown event " + response.event)
      }
    },
    ping: (context) => {
      if (ws.isConnected()) {
        ws.send(`/PING ${context.state.currentUser.userId}`)
      } else { ws.disconnect() }
    },
    join: (context, nickname) => {
      context.commit("setNickname", nickname)
      ws.send(`/JOIN ${nickname}`)
    }
  }
})
