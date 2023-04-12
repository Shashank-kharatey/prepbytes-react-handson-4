import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Component.css"

const Student = () => {
  const [Data, setData] = useState({ Name1: "shakif", Age: "12", Course: "mern", Batch: "sept" })
  const [arrData, arrDataSet] = useState([])
  const [TrueFalse, setTrueFalse] = useState(false)
  const ChangeHandel = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value })
    console.log(Data)
  }
  const ClickFunc = (e) => {
    e.preventDefault();
    arrDataSet([...arrData, Data])
    setTrueFalse(!TrueFalse)
    console.log(arrData)
  }
  const PageChange = () => {
    setTrueFalse(!TrueFalse)
  }


  return (
    <div>
      <div>
        <form className='form-rend'>
          {TrueFalse ?
            <div>
              <div className='form-flex'>
                <div className='form-div'><label htmlFor="name">Name:</label> <br />
                  <input className='input-box' name="Name1" value={Data.Name1} onChange={ChangeHandel} type="text" /><br /></div>

                <div className='form-div'><label htmlFor="age">Age</label><br />
                  <input className='input-box' name="Age" value={Data.Age} onChange={ChangeHandel} type="number" /><br /></div>

                <div className='form-div'><label htmlFor="course">Course</label><br />
                  <input className='input-box' name="Course" value={Data.Course} onChange={ChangeHandel} type="text" /><br /></div>

                <div className='form-div'><label htmlFor="batch">Batch</label><br />
                  <input className='input-box' name="Batch" value={Data.Batch} onChange={ChangeHandel} type="text" /></div>

              </div>
              <button className='btn-form' onClick={PageChange}>Cancel</button>
              <button className='btn-form' type='button' onClick={ClickFunc}>Submit</button>
            </div>
            :
            <div>
              <span id='span1'>Student Details</span>
              <button id='btn1' onClick={PageChange}>Add New Student</button>
              <div className='flex'>
                <div className='box'>Name</div>
                <div className='box'>Age</div>
                <div className='box'>Course</div>
                <div className='box'>Batch</div>
                <div className='box'>Change</div>
              </div>

              {
                arrData.map((item, index) => {
                  return (
                    <div key={index} className='flex1'>
                      <div className='box1'>{item.Name1}</div>
                      <div className='box1'>{item.Age}</div>
                      <div className='box1'>{item.Course}</div>
                      <div className='box1'>{item.Batch}</div>
                      <div className='box1'><Link to="/student/edit">Edit</Link></div>
                    </div>
                  )
                })
              }
            </div>
          }
        </form>
      </div>

    </div>
  )
}

export default Student