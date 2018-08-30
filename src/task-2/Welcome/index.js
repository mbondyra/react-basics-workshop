import React, { Component } from 'react'
import './style.css'

class Welcome extends Component {
  render () {
    let titleClassName = 'title'
    if (this.props.titleClassName) {
      titleClassName = 'title ' + this.props.titleClassName
    }
    return (
      <div>
        <div className={titleClassName}>Elixirs' class</div>
        <div className='message' style={{ color: this.props.messageColor }}>
          This is your first elixirs' class, {this.props.who}
          {this.props.withEmoji && <span> 😁</span>}
          <br />
        </div>
      </div>
    )
  }
}

export default Welcome
