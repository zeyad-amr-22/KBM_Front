import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './OpenLessons.module.css'
import {cardsList} from '../data/data.js'

const OpenLessons = () => {

  const { idx } = useParams();  /* hook used to get the idx from the url.
                                idx here is the index of the lesson card which is the
                                 'idx' property of this card object in the cardsList array.*/
                               
  const navigate = useNavigate(); 

  return (
    <div className= {styles.openLessonsContainer}>

      <div className= {styles.headerPart}>

        <div className= {styles.industryContainer}>
          <h5>{cardsList[idx].industry}</h5>
        </div>
        <h2>{cardsList[idx].lessonTitle}</h2>
        <h5>{cardsList[idx].projectName}</h5>

      </div>

      <div className= {styles.authorPart}>
        <h4>Author:</h4>
        <h5>{cardsList[idx].author}</h5>
      </div>

      <div className= {styles.contentPart}>
        <h4>Description:</h4>
        <p>{cardsList[idx].description}</p>
      </div>

      <button className= {styles.backToLessonsButton} onClick= {() => navigate('/')}>Back to Lessons</button>

    </div>
  )
}

export default OpenLessons