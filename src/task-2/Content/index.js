import React, { Component } from 'react'
import bottle from './bottle.png'
import './style.css'
import './potions.css'
import Welcome from '../Welcome/index'

class App extends Component {
  render () {
    return (
      <div className='App-content'>

        <Welcome who='Ada' messageColor='#fff' titleClassName='blue' withEmoji />

        <div className='potions'>
          <div className='potion'>
            <img src={bottle} alt='bottle' />
            <div className='liquid' />
            <div className='label'>id: #veritaserum</div>
          </div>
          <div className='potion'>
            <img src={bottle} alt='bottle' />
            <div className='liquid' />
            <div className='label'>class: .felis-felisis</div>
          </div>
          <div className='potion'>
            <img src={bottle} alt='bottle' />
            <div className='liquid' />
            <div className='label'>inline-style: backgroundColor: 'grey'</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
