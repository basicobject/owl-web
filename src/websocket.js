
const wsUrl = "ws://127.0.0.1:1338/affirm"

const websocket = {
  isConnected: () => {
    return (this.ws.readyState === WebSocket.OPEN)
  },
  send: (text) => this.ws.send(text),
  setMessageHandler: (handler) => this.onmessageHandler = handler,
  connect: () => {
    const that = this
    that.ws = new WebSocket(wsUrl)

    that.ws.onerror = (error) => {
      console.log("Websocket connect error: " + wsUrl)
      that.ws.close()
    }

    that.ws.onclose = (event) => {
      console.log(`Websocket closed, reconnecting ... ${event.reason}`)
      setTimeout(function() {
        websocket.connect()
      }, 1000)
    }
    that.ws.onopen = (event) => {
      console.log("Websocket connection OK")
    }

    that.ws.onmessage = (event) => {
      console.log("Websocket new message received: " + event.data)
      that.onmessageHandler(event)
    }
  },
  disconnect: () => this.ws.close()
}

export default websocket
