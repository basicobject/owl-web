
const wsUrl = "ws://127.0.0.1:1338/affirm"
const ws = new WebSocket(wsUrl)

ws.onerror = (error) => console.log("Websocket connect error: " + wsUrl)

ws.onclose = (event) => {
  console.log(`Websocket closed, reconnecting ... ${retryAttempt}`)
}

ws.onopen = (event) => {
  console.log("Websocket connection OK")
}

ws.onmessage = (event) => {
 console.log("Websocket new message received: " + event.data)
}

export default {
  isConnected: () => {
    return (ws.readyState === WebSocket.OPEN)
  },
  send: (text) => ws.send(text),
  receiveHandler: (handler) => {
    ws.onmessage = (event) => {
      console.log("Websocket new message received: " + event.data)
      handler(event)
    }
  }
}
