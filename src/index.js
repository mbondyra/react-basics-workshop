import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './task-5/App'

/* Do you remember this bit?
 * The first Parameter is JSX that we want to put into HTML,
 * the second is parent DOM element.
 * The root element is in public/index file.
 */

ReactDOM.render(<App />, document.getElementById('root'))
