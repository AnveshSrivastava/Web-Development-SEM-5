import React, { Component } from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          {/* Route navigation */}
          <div className="auth-links">
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
