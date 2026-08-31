import React from 'react'
import styles from './ChatbotMessage.module.css'

const ChatbotMessage = ({key, chatbotMessage}) => {
  return (
    <div className={styles.chatbotMessageBubble} key={key}>
      {chatbotMessage}
    </div>
  )
}

export default ChatbotMessage