import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Chatbot.module.css'
import UserMessage from '../components/UserMessage'
import ChatbotMessage from '../components/ChatbotMessage'
import { Send } from "lucide-react"

const Chatbot = () => {

  const navigate = useNavigate();

  {/* handling the user input field change using useState hook when user is typing */}
  const [userInput, setUserInput] = useState('');
  function handleUserInputChange(event){
    setUserInput(event.target.value);
  }

  
  {/* Messages array (array of strings) carries the messages for both the user and the chatbot*/}
  const [Messages, setMessages] = useState(["Hi, how can I help you today?"]);
  async function sendMessage() {
    if (userInput.trim() !== '') {
      const currentMessage = userInput;
      setUserInput(''); // Clear input immediately
      
      setMessages(prev => [...prev, currentMessage]);

      try {
        // Send to .NET Backend
        const response = await fetch('http://localhost:5237/Chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentMessage) // Sends as raw string
        });

        if (!response.ok) {
          throw new Error(`Backend error: ${response.status}`);
        }

        const data = await response.json(); // data will be in shape of {"reply":"response"}
        
      
        
        setMessages(prev => [...prev, data.reply]);
        
      } catch (error) {
        console.error("Error:", error);
        setMessages(prev =>[...prev, "Sorry, I'm having trouble connecting to the server."]);
      } 
    }
  }


  function startNewChat(){
    setMessages(["Hi, how can I help you today?"]);
    setUserInput('');
  }

  return (
    <div className= {styles.chatbotContainer} >

    {/* left side of the chatbot page */}
      <div className= {styles.leftSide}>
        <h4>History</h4>
        <p>All your chats are saved here.</p>
        <button className= {styles.newChatBtn} onClick= {startNewChat}>New Chat</button>
      </div>
    
    {/* right side of the chatbot page */}
      <div className= {styles.rightSide}>
        <div className= {styles.titleAndCloseBtn}>
          <h2>AI Assistant</h2>
          <button className= {styles.closeBtn} onClick= {() => navigate(-1)}> x </button>
        </div>

        <div className= {styles.chatContent}>

          {Messages.map((message, index) => {
            {/* first message if from the chatbot (index = 0), so chatbot messages are always with even index*/}
            if(index%2 === 0 ){
              // wrap this message in the ChatbotMessage component and return it to be rendered
              return <ChatbotMessage key = {index} chatbotMessage= {message}/>
            }
            else{
              // wrap this message in the UserMessage component and return it to be rendered
              return <UserMessage key = {index} message= {message}/>
            }
          })}

        </div>

        <div className= {styles.inputAndSendBtn}>
          <input type= "text" placeholder= "Ask me anything about your knowledge base..." value={userInput} onChange={handleUserInputChange} />
          <button className= {styles.sendBtn} onClick={sendMessage}><Send /></button>
        </div>

      </div>

    </div>
  )
}



export default Chatbot