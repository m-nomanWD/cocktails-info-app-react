import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className='logo'>
            <span>CheerCraze</span>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/' className='link'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='link'>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Navbar
