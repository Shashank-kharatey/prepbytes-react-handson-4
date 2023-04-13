import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function HeaderComp() {
  return (
    <>
      <div id='header'>
        <div className='header-link'><Link to="/">Home</Link></div>
        <div className='header-link'><Link to="/student">Student</Link></div>
        <div className='header-link'><Link to="/about">About us</Link></div>
      </div>
    </>
  )
}

export default HeaderComp