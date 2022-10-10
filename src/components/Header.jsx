import React from 'react'

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className='add'
      onClick={()=> handleToggleDarkMode ((previousDarkMode) => !previousDarkMode)}>Toggle Background Lights</button>
    </div>
  )
}

export default Header
