import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LanguageProvider } from './context/LanguageContext'
import App from './App'
import './index.css'

const rootEl = document.getElementById('root')!

const tree = (
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
)

if (rootEl.firstChild) {
  hydrateRoot(rootEl, tree)
} else {
  createRoot(rootEl).render(tree)
}
