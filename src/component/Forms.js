import React from 'react'

const Forms = () => {
  return (
    <div>Add New Student 
        <form>
            <div className='form-div'><label htmlFor="name">Name:</label> <br />
            <input type="text" /><br /></div>
            
            <div className='form-div'><label htmlFor="age">Age</label><br />
            <input type="number" /><br /></div>
            
            <div className='form-div'><label htmlFor="course">Course</label><br />
            <input type="text" /><br /></div>
            
            <div className='form-div'><label htmlFor="batch">Batch</label><br />
            <input type="text" /></div>
            
        </form>
        </div>
  )
}

export default Forms