class TextMessage {
  constructor(sender, text, state = "new") {
    this.sender = sender
    this.text = text,
    this.state = state
    this.createdAt = Date.now()
  }
}

export default TextMessage
