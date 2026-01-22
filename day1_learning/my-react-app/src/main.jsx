import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyForm from './components/MyForm.jsx'
createRoot(document.getElementById('root')).render(
  <>
  <MyForm/>
  </>,
)
