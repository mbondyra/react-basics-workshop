import React from 'react'
import './door.css'

const Door = ({open, children}) => {
  const className = open ? 'door doorOpen' : 'door'
  return (
    <div className='wholeDoor'>
      <div className={className} />
      {children}
    </div>
  )
}

export default Door
