import React from 'react'
import { BiTrash } from 'react-icons/bi' 


const Note = ({ note }) => {
    

    async function deleteNote(){

        await fetch(`http://localhost:8000/notes/${note.id}`, {

            method: 'DELETE',
            headers: {

                'Content-Type': 'application/json'

            },
            
         })

         window.location.reload()
         

    }

    return (
    <div >
        <div className='note-card'>
            <h2>{note.title}</h2>
            <h3 className='note-text'>{note.text}</h3>
            {note.date}
            
            <BiTrash className='trash-icon'  onClick={deleteNote}/>
          
        </div>
    </div>
  )
}

export default Note