import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Drift from "./pages/Drift"
import Attack from './pages/Attack'
import Karting from "./pages/Karting"

function App() {
  return (
    <div className="app">
      <ul className="menu">
        <li><Link to="/">ГЛАВНАЯ</Link></li>
        <li><Link to="/drift">ДРИФТ-такси</Link></li>
        <li><Link to="/attack">TIME ATTACK</Link></li>
        <li><Link to="/karting">FORZA KARTING</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drift" element={<Drift/>}/>
        <Route path="/attack" element={<Attack/>}/>
        <Route path="/karting" element={<Karting/>}/>
      </Routes>
    </div>
  )
}

export default App;
