import React from 'react'
import ReactDOM from 'react-dom/client'

// Self-hosted IBM Plex Mono (the font GlobalStyle asks for).
// Latin subset only: the full package also ships cyrillic, greek and vietnamese.
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import '@fontsource/ibm-plex-mono/latin-600.css'

import App from './App.tsx'
import './styles/themes.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
