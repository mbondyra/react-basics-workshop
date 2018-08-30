import React, { Component } from 'react'
import './style.css'
import Welcome from '../Welcome/index'
import Door from '../Door/index'
import Wand from '../Wand'

class App extends Component {
  render () {
    return (
      <div className='App-content'>
        <Welcome who='Ada' messageColor='#fff' />
        <Door />
        <div>
          <Wand />
        </div>
      </div>
    )
  }
}

export default App
