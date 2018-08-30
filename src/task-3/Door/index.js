import React from 'react'
import './door.css'

const Door = ({isOpen = false}) => {
  return (
    <div className='wholeDoor'>
      <div className={'door ' + (isOpen && 'doorOpen')} />
    </div>
  )
}

export default Door
