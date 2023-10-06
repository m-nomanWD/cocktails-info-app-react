import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </>
    )
  }
}

export default Navbar
