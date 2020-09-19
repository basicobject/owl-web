import UUID from "../util/Uuid"

class TextMessage {
  constructor(sender, text, state = "new", createdAt = Date.now(), messageId = UUID.randomUUID()) {
    this.sender = sender
    this.text = text
    this.state = state
    this.createdAt = createdAt
    this.messageId = messageId
  }

  toLeanMessage() {
    return {
      userId: this.sender.userId,
      text: this.text,
      state: this.state,
      createdAt: this.createdAt,
      messageId: this.messageId
    }
  }
}

export default TextMessage
