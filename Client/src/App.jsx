import { useState } from "react"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import NewTask from "./components/NewTask.jsx"
import Signup from "./pages/Signup.jsx"
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  

  return (
    <BrowserRouter>
    <Routes>
      
        
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App