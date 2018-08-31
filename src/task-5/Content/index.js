import React, { Component } from 'react'
import './style.css'
import Welcome from '../Welcome/index'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoaded: false,
      error: false,
      items: null
    }
  }
  componentDidMount () {
    window.fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then(res => res.json())
      .then(res => this.setState({
        isLoaded: true,
        items: res
      }),
      error => this.setState({
        isLoaded: true,
        error
      })
      )
  }

  render () {
    return (
      <div className='App-content'>
        <div>There are 11 students in your classroom.</div>
        <div>There are 5 females and 6 males.</div>
        <div>The names of your colleagues are: ... </div>
        <div>The names of your colleagues from Gryffindor: ... </div>
        <div>The oldest student is (filter by year)</div>
      </div>
    )
  }
}

export default App
