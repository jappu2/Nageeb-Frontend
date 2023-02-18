import React from 'react'
import {Route, Router, Routes} from 'react-router-dom'
import Header from './componants/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContPage from './pages/ContPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard.js'
import Users from './pages/Users.js'
import UpdateUser from './pages/updateUser.js' 
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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UpdateUser />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App;
