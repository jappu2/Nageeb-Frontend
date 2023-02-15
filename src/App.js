import React from 'react'
import {Route, Router, Routes} from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContPage from './ContPage'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard.js'
import Users from './Users.js'
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
        </Route>

      </Routes>
    </div>
  )
}

export default App;
