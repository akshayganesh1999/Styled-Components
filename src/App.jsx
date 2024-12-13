import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './LoginPage'

function App() {

  return (
    <>
      <Routes>
      <Route path='/*' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
