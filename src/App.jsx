import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Book from './pages/Book.jsx'
import Home from './pages/Home.jsx'
const App = () => {
  return (
   <div className="bg">
     <div className='conta'>
     <div className="appdf">
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bookmark' element={<Book></Book>}></Route>
      </Routes>
     </div>
    </div>
   </div>
  )
}

export default App