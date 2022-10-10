import React, { useState } from 'react'


const NewNote = ({handleAddNotes}) => {
    const [noteText, setNoteText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');
    const characterLimit = 200;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0){
        setNoteText(e.target.value);
    }
    }

    const titleChange = (e) => {
        setNoteTitle(e.target.value)
    }

    const handleSaveClick = () => {
        if (noteTitle.trim().length > 10){
        handleAddNotes(noteText , noteTitle);
        setNoteTitle('');
        setNoteText('');
    }
        else if (noteTitle.trim().length < 10 && noteText.trim().length > 0 && noteTitle.trim().length !== 0){
            handleAddNotes(noteText , noteTitle);
        setNoteTitle('');
        setNoteText('');
        }

        else if (noteTitle.trim().length < 10){
             window.alert("Error: Note can't be saved, You're either missing the title or it's length is less than 10")

        }

    }


  return (
    <div className='note new'>
        <textarea placeholder='Add title' 
        value={noteTitle} 
        onChange={titleChange}/>
        <textarea 
        rows='8'
        cols= '10'
        placeholder ='Type to add a note...'
        value={noteText}
        onChange={handleChange}/>
    <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className='add' onClick={handleSaveClick}>Add</button>
    </div>
    </div>
  )
}

export default NewNote
