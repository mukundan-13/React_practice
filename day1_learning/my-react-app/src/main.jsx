import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FavoriteColor from './components/FavoriteColor.jsx'
import Scooter from './components/Scooter.jsx';
import List from './components/List.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <FavoriteColor />
    <Scooter/>
    <List/>
  </>,
)
