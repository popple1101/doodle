import Doodle from './Doodle'
import ResultPage from './ResultPage'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    
    <>
    <Routes>
    <Route path="/" element={<Doodle/>}/>
    <Route path='/result' element={<ResultPage/>}/>
    </Routes>
    </>
  )
}

export default App
// 제바아아ㅏ앙ㄹ