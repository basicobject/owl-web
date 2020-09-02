class TextMessage {
  constructor(sender, text, state = "new") {
    this.sender = sender
    this.text = text,
    this.isSent = false,
    this.state = state
  }
}

export default TextMessage
