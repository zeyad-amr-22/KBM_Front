import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import styles from './LessonCard.module.css'

const LessonCard = ({industry, title, author}) => {

const navigate = useNavigate();  /*hook used to navigate to a specific route */

function OpenLessonPage(){
  navigate('/OpenLesson')
}

  return (
    <div className= {styles.lessonCard}>

      <div className= {styles.industryContainer}>
        <h5>{industry}</h5>
      </div>

      <h3 className= {styles.title}>{title}</h3>

      <h5 className= {styles.author}>{author}</h5>

      <button className= {styles.openLessonButton} onClick= {OpenLessonPage}>Open Lesson</button>

    </div>
  )
}

export default LessonCard