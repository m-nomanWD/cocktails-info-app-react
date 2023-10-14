import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Navbar() {
  const { state } = useGlobalContext()
  return (
    <>
      <nav>
        <span className='logo'>
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt='' />
        </span>
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
          <li>
            <Link to='/favListPage' className='link heart-link'>
              <img src='/heart.png' alt='' className='nav-heart' />
              <span className='counter'>{state.counter}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
