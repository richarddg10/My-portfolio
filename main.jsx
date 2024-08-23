import React from 'react'
import { createRoot} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './main.css'
import { AppRouter } from './src/AppRouter'
import { NavBar } from './src/components'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col items-center">
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  </React.StrictMode>
)