import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App2'
import './index.css'   // <- importante

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
