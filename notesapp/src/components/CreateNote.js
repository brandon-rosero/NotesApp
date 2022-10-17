import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const CreateNote = () => {
  
  const [title, setTitle] = useState('')

  const [text, setText] = useState('')

  let note;

  const options = {

     weekday: 'long', 
     year: 'numeric', 
     month: 'long', 
     day: 'numeric'

  }

  let time = new Date()
  time.toLocaleDateString('en-US', options)
  async function createNote(){

    await fetch('http://localhost:8000/notes', {

      method: 'POST',
      headers: {

          'Content-Type': 'application/json'

      },
      body: JSON.stringify({...note})

    })

  }

  function handleSubmit(e){

    e.preventDefault()
    note = { title, text, time }
    createNote() 

  }

  function countChar(){

    var textAreaLength = document.getElementById('textAreaId').value.length
    console.log(textAreaLength)
    document.getElementById('charNum').innerHTML = "Number of characters remaining: " + (350 - textAreaLength)

  }
  
  return (
     <div> 
        <Navbar />
        <div className='create-note-card-container'>
          <div className='create-note-card'>
            <form onSubmit={handleSubmit}>
              <h1>New Note</h1>
              <input className='note-title' type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}></input>
              <textarea maxLength='350' id='textAreaId' onKeyUp={countChar} className='note-textarea' placeholder='Write your note here...' type='text' value={text} onChange={e => setText(e.target.value)}></textarea>
              <div id='charNum'>Number of characters remaining: 350</div>
              <button className='note-submit'>Add</button>
            </form> 
          </div>
        </div>
      </div>
  )

 
}

export default CreateNote