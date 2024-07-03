//main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Route'
import {BrowserRouter} from 'react-router-dom'//react-router-dom import
import './App.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)















