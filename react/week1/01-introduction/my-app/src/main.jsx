import React from 'react'
import ReactDOM from 'react-dom/client'
//import from './App.jsx'
import counter from './counter.jsx'
import './index.css'
import Counter from './counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
)
