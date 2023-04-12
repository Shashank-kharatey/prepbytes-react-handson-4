import React from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
  return (
    <div>Update Student Details
            <form>
            <div className='form-div'><label htmlFor="name">Name:</label> <br />
            <input type="text" /><br /></div>
            
            <div className='form-div'><label htmlFor="age">Age</label><br />
            <input type="number" /><br /></div>
            
            <div className='form-div'><label htmlFor="course">Course</label><br />
            <input type="text" /><br /></div>
            
            <div className='form-div'><label htmlFor="batch">Batch</label><br />
            <input type="text" /></div>
            
        <Link to="/student"><button>Cancel</button></Link>
        <Link to="/student"><button type='submit'>Update</button></Link>
        </form>

    </div>
  )
}

export default Edit