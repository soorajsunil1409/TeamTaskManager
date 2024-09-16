import { useState } from "react"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import NewTask from "./components/NewTask.jsx"
import Signup from "./pages/Signup.jsx"

const App = () => {
  const [pageNumber, setPageNumber] = useState(0)

  return (
    <div className="absolute w-full h-full">
      <Dashboard pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}
export default App