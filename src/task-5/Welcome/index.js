import React, { Component } from 'react'
import './style.css'

class Welcome extends Component {
  render () {
    return (
      <div>
        <div className='title'>Advanced spells' class</div>
        <div className='message' style={{color: this.props.messageColor}}>
          Welcome to advanced lesson! {this.props.who} <br />
        </div>
      </div>
    )
  }
}

export default Welcome
