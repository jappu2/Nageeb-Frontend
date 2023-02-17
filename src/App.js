import React from 'react'
import {Route, Router, Routes} from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContPage from './ContPage'
import Register from './Register'
import Login from './Login'
import Dashboarda from './Dashboarda.js'
import Usersa from './Usersa.js'
import UpdateUsera from './updateUsera.js' 
import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboarda" element={<Dashboarda />}>
          <Route path="usersa" element={<Usersa />} />
          <Route path="usersa/:id" element={<UpdateUsera />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App;
