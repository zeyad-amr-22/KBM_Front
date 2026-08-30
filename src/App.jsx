import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import LessonsLearned from './pages/LessonsLearned'
import CreateLessons from './pages/CreateLessons'
import OpenLessons from './pages/OpenLessons'
import Chatbot from './pages/Chatbot'
import './index.css'

function App() {
  

  return (
    <>
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path= '/' element = {<LessonsLearned/>} />
          <Route path= '/CreateLesson' element = {<CreateLessons/>} />
          <Route path= '/OpenLesson' element = {<OpenLessons/>} />
          <Route path= '/Chatbot' element = {<Chatbot/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
