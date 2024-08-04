import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import './App.css';
import Python from './pages/Python';
import Html from './pages/Html';
import Javascript from './pages/Javascript';
import PythonReadingMaterials from './pages/PythonReadingMaterials';
import Css from './pages/Css';
import Script from './pages/Script';
import Java from './pages/Java';
import Jv from './pages/Jv';
import Kotlin from './pages/Kotlin';
import Kt from './pages/Kt';
import Php from './pages/php';
import Ph from './pages/ph';
import Csharp from './pages/csharp';
import Sharp from './pages/sharp';
import Datascience from './pages/datascience';
import Science from './pages/science';
import Contact from './pages/contact';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseTitle" component={Courses} />
          <Route path="/Python/:id" element={<Python/>} />
          <Route path="/PythonReadingMaterials" element={<PythonReadingMaterials/>}/>
          <Route path="/Html/:id" element={<Html/>}/>
          <Route path="/Css" element={<Css/>}/>
          <Route path="/Javascript/:id" element={<Javascript/>}/>
          <Route path="/Script" element={<Script/>}/>
          <Route path="/Java/:id" element={<Java/>}/>
          <Route path='/Jv' element={<Jv/>}/>
          <Route path="/Kotlin/:id" element={<Kotlin/>}/>
          <Route path='/Kt' element={<Kt/>}/>
          <Route path="/Php/:id" element={<Php/>}/>
          <Route path='/ph' element={<Ph/>}/>
          <Route path="/csharp/:id" element={<Csharp/>}/>
          <Route path='/ph' element={<Ph/>}/>
          <Route path='/sharp' element={<Sharp/>}/>
          <Route path="/datascience/:id" element={<Datascience/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
