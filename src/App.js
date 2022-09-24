import './App.css'
import {Link, Switch, Route} from "react-router-dom"
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
        <li><Link to="/drift">TIME ATTACK</Link></li>
        <li><Link to="/drift">FORZA KARTING</Link></li>
      </ul>

      <Switch className="content">
        <Route exact path="/"><Home /></Route>
        <Route path="/drift"><Drift /></Route>
        <Route path="/attack"><Attack /></Route>
        <Route path="/karting"><Karting /></Route>
      </Switch>
    </div>
  )
}

export default App;
