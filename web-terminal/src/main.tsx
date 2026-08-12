import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/fonts.css'

import App from './App.tsx'
import './styles/themes.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
