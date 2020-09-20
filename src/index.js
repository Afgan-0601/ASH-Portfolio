import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import * as serviceWorker from './serviceWorker'

// window.addEventListener('click', e => {
//   console.log(e.target)
// })

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
