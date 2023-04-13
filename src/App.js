import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './Component/Edit';
import Home from './Component/Home';
import Student from './Component/Student';
import HeaderComp from './Component/HeaderComp';
import About from './Component/About';


function App (){
  return (
    <div>
      
    <BrowserRouter>
    <HeaderComp />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/student/edit" element={<Edit />}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
