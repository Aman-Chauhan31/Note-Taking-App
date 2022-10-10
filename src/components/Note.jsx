import { MdDeleteForever } from 'react-icons/md';
import React from 'react'

const Note = ({id, title, text, date, handleDeleteNote}) => {
  return (
    <div className='note'>
      <div className='note-header'>
      <h4>{title}</h4>
      <span>{text}</span>
      </div>
      <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
      </div>
    </div>
  )
}

export default Note
