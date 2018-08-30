import React from 'react'
import Confetti from 'react-dom-confetti'
import './wand.css'
import wand from './wand.png'

const confettiConfig = {
  angle: 90,
  spread: 200,
  startVelocity: 30,
  elementCount: 60,
  decay: 0.95,
  colors: ['white', 'gold', 'silver']
}

const Wand = ({ raised, spellCasting }) => {
  const className = raised ? 'wand wandActive' : 'wand'
  return (
    <div className='wandContainer'>
      <img src={wand} className={className} alt='wand' />
      <Confetti active={spellCasting} config={confettiConfig} className='confetti' />
    </div>
  )
}

export default Wand
