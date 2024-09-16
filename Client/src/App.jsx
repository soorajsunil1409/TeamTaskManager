import { useState } from "react"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import NewTask from "./components/NewTask.jsx"
import Signup from "./pages/Signup.jsx"
import TaskPopup from "./components/TaskPopup.jsx"
import AllTasks from "./pages/AllTasks.jsx"

const App = () => {
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <div className="absolute w-full h-full">
      {/* <Dashboard pageNumber={pageNumber} setPageNumber={setPageNumber} /> */}
      <AllTasks/>
    </div>
  )
}
export default App