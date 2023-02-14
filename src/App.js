import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContPage from './ContPage'
import Register from './Register'
import Login from './Login'
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/contact" element={<ContPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
