import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About';
import Edit from './component/Edit';
// import Forms from './Component/Forms';
import Home from './component/Home';
import Student from './component/Student';
import Header from './HeadFoot/Header';


function App (){
  return (
    <div>
      
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/student/edit" element={<Edit />}/>
      {/* <Route path="/student/forms" element={<Forms />}/> */}
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
