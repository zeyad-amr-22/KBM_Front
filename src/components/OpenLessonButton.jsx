import React from 'react'
import { useNavigate } from 'react-router-dom'

const OpenLessonButton = ({key}) => {

  const navigate = useNavigate();
  function OpenLessonPage(){
    navigate('/OpenLesson')
  }

  return (
    <div>
        <button onClick= {OpenLessonPage}>Open Lesson</button>
    </div>
  )
}

export default OpenLessonButton