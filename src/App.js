import Topbar from "./components/Topbar/Topbar"
import "./app.css"
import Sidebar from "./components/Sidebar/Sidebar"
import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  )
}

export default App
