import React from 'react'
import Navbar from './Navbar'
import Note from './Note'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
  
  const [notes, setNotes] = useState([])
  
  useEffect(() => {

    getNotes()

  }, [])

  async function getNotes(){

    let response = await fetch('http://localhost:8000/notes')

    let data = await response.json()

    setNotes(data)

  }

  return (
    <div>
      <Navbar />
      <div className='notes-container'>{notes.map(note => <Note  key={note.id} note={note} />)}</div>
    </div> 
  )
}

export default Home