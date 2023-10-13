import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Error404 extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          color: 'brown',
        }}
      >
        <h1>Sorry Page not Found Error 404 </h1>
        <Link
          to={'/'}
          className='button-container'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            marginTop: '2rem',
          }}
        >
          <button style={{ width: '140px' }} className='detail-btn'>
            Home Page
          </button>
        </Link>
      </div>
    )
  }
}

export default Error404
