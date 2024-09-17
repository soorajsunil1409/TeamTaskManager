import { useState } from "react"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import NewTask from "./components/NewTask.jsx"
import Signup from "./pages/Signup.jsx"
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskPopup from "./components/TaskPopup.jsx"
import AllTasks from "./pages/AllTasks.jsx"

const App = () => {
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <BrowserRouter>
      <Routes>


        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Dashboard pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Tasks" element={<AllTasks pageNumber={pageNumber} setPageNumber={setPageNumber} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App