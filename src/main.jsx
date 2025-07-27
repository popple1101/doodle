import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Doodle from './Doodle.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    {/* <Doodle/> */}
    </BrowserRouter>
  </StrictMode>,
)
// ㅓㅇ라너ㅣㅏ러ㅏㄴ머랄ㅇㄹㅇㄴㄹ