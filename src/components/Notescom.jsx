import React from 'react'
import NewNote from './NewNote'
import Note from './Note'

const Notescom = ({notes , handleAddNotes, handleDeleteNote}) => {
  return (
    <div className='notes'>
        {notes.map((note) => (
          <Note id={note.id} title={note.title} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
        ))}
        <NewNote handleAddNotes={ handleAddNotes } />
      
    </div>
  )
}

export default Notescom
