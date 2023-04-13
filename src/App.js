import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditChange from './RoutingComponents/EditChange'
import Home from './RoutingComponents/Home';
import Student from './RoutingComponents/Student';
import About from './RoutingComponents/About';
import HeaderComp from './Header/HeaderComp';


function App (){
  return (
    <div>
      
    <BrowserRouter>
    <HeaderComp/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/student/edit' element={<EditChange/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
