import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CreateLessons.module.css'
import {cardsList} from '../data/data.js'

const CreateLessons = () => {

  const navigate = useNavigate(); // take care that hooks must be called at the top like this, but not directly used like this: 'useNavigate('/');' inside a function as I fell in an error when I did that. In the function 'generateLesson()', use the variable 'navigate'.

  {/* handling the lesson title input field change using useState hook */}
  const [title, setTitle] = useState('');
  function handleTitleChange(event){
    setTitle(event.target.value);
  }

  {/* handling the project name input field change using useState hook */}
  const [projectName, setProjectName] = useState('');
  function handleProjectNameChange(event){
    setProjectName(event.target.value);
  }

  {/* handling the description input field change using useState hook */}
  const [description, setDescription] = useState('');
  function handleDescriptionChange(event){
    setDescription(event.target.value);
  }

  {/* handling the industry dropdown field change using useState hook */}
  const [industry, setIndustry] = useState('');
  function handleIndustryChange(event){
    setIndustry(event.target.value);
  }

  {/* handling the submit btn to add the new lesson to the cardsList array so it gets rendered as a new card in the LessonsLearned page*/}
  function generateLesson(){
    cardsList.push({
      department: 'dept1',
      lessonTitle: title, 
      projectName: projectName,
      industry: industry,
      author: 'John Doe', 
      description: description
    })
    setTitle('')
    setProjectName('')
    setIndustry('')
    setDescription('')
    navigate('/');  // navigate back to the LessonsLearned page after submitting the new lesson
    // console.log(cardsList)  // for testing purposes, to see if the new lesson is added to the array
  }

  function discardChanges(){
    setTitle('')
    setProjectName('')
    setIndustry('')
    setDescription('')
  }


  return (
    <div className= {styles.createLessonsContainer}>

      {/*left column*/}
      <div className= {styles.leftColumn}>

        <div className= {styles.CreateLessonsHeader}>
          <h1>Create Lesson</h1>
          <p>Fill in the details below to create a new lesson.</p>
        </div>

        <form className= {styles.basicInfoForm}>
          <h1>Basic Information</h1>

          <div className= {styles.lessonTitleGroup}>
            <h5>Lesson Title*</h5>
            <input type= "text" placeholder= "Enter lesson title" value= {title} onChange= {handleTitleChange} required/>
          </div>

          <div className= {styles.projectNameGroup}>
            <h5>Project Name*</h5>
            <input type= "text" placeholder= "Enter project name" value= {projectName} onChange= {handleProjectNameChange} required/>
          </div>
        
          <div className= {styles.industryGroup}>
            <h5>Industry*</h5>
            <select value= {industry} onChange= {handleIndustryChange} required>  {/* used for dropdown menu */}
              <option value= "">Select industry</option>
              <option value= "Automation">Automation</option>
              <option value= "Software">Software</option>
            </select>
          </div>

          
        </form>

        <form className= {styles.lessonContentForm}>
          <h1>Lesson Content</h1>

          <h5>Description*</h5>
          <textarea placeholder= "Enter lesson description" value= {description} onChange= {handleDescriptionChange} required></textarea>   {/* used for multi-line text input */}
        </form>

        <form className= {styles.attachmentsForm}>
          <h1>Attachments</h1>
          <input type= "file" accept= ".svg, .png, .jpg, .gif" placeholder="Upload .svg, .png, .jpg, .gif files" multiple/>  {/* the word "multiple" allows users to select multiple files */}
          <input type= "file" accept= ".pdf, .docx, .pptx" placeholder="Upload .pdf, .docx, .pptx files" multiple/>
        </form>

        <div className= {styles.buttonsContainer}>
          <button className= {styles.discardButton} onClick= {discardChanges}>Discard</button>
          <button className= {styles.draftButton}>Save as draft</button>
          <button className= {styles.submitButton} onClick= {generateLesson}>Submit</button>
        </div>

      </div>

      {/*right column*/}
      <div className= {styles.rightColumn}>

        <div className= {styles.reviewSummary}>
          <h3>Review Summary</h3>

          {/* BASIC INFORMATION section*/}
          <div className= {styles.reviewSection}>
            <h5>BASIC INFORMATION</h5>
            {/*row 1*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Lesson Title</span>
              <span className= {styles.value}>{title.replace(/\s/g, "") == '' ? 'Not provided' : title}</span>   {/* this '.replace(/\s/g, "")' command removes all whitespace characters from the string */}
            </div>
            {/*row 2*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Project Name</span>
              <span className= {styles.value}>{projectName.replace(/\s/g, "") == '' ? 'Not provided' : projectName}</span>
            </div>
            {/*row 3*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Industry</span>
              <span className= {styles.value}>{industry == '' ? 'Not provided' : industry}</span>
            </div>
          </div>

          {/* LESSON CONTENT section*/}
          <div className= {styles.reviewSection}>
            <h5>LESSON CONTENT</h5>
            {/*row 1*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Description</span>
              <span className= {styles.value}>{description.replace(/\s/g, "") == '' ? 'Not provided' : description}</span>
            </div>
          </div>

          {/* ATTACHMENTS section*/}
          <div className= {styles.reviewSection}>
            <h5>ATTACHMENTS</h5>
            {/*row 1*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Files</span>
              <span className= {styles.value}>0 items</span>
            </div>
            {/*row 2*/}
            <div className= {styles.gridRow}>
              <span className= {styles.label}>Status</span>
              <span className= {styles.value}>Not provided</span>
            </div> 
          </div>

        </div>

      </div>



      

    </div>
  )
}

export default CreateLessons