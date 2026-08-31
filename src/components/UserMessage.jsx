import React from 'react'
import styles from './UserMessage.module.css'

{/* component to be renedered displaying the user messages in the chatbot page */}
const UserMessage = ({key, message}) => {
  return (
    <div className= {styles.userMessageBubble} key={key}>
      {message}
    </div>
  )
}

export default UserMessage