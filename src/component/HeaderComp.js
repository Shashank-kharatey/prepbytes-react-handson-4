import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const HeaderComp = () => {
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