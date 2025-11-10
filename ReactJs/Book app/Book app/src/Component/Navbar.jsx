import React, { Component } from 'react'
import './Navbar.css'
export class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#news">News</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
      </div>
    )
  }
}

export default Navbar