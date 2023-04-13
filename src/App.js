import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About';
import Edit from './Component/Edit';
import Home from './Component/Home';
import Student from './Component/Student';
import HeaderComp from './Component/HeaderComp';


function App (){
  return (
    <div>
      
    <BrowserRouter>
    <HeaderComp />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/student/edit" element={<Edit />}/>
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
