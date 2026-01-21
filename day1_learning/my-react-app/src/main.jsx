import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './components/Car.jsx'
import Garage from './components/Garage.jsx'
import Apple from './components/Apple.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Garage/>
    <Apple/>
  </StrictMode>,
)
