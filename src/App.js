import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './screens/Header';
import Sidebar from './components/Sidebar';
import {Switch, Route} from 'react-router-dom';
import About from './screens/About';
import { useState } from 'react'
import Contact from './screens/Contact'
import Projects from './screens/Projects'
function App() {
  const [navToggle, setNavToggle] = useState(false)

  const navclick = () => {
    setNavToggle(!navToggle)
  }
  return (
    <div className='App'>
      <div className="side_bar">
        <Sidebar show={navToggle} click={navclick}/>
      </div> 
      <div className="nav-btn" onClick={navclick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>  
      </div>   
      <div className="main-content">
        <Switch>
          <Route path='/' exact>
            <Header/>
          </Route>
          <Route path='/about' exact>
            <About/>
          </Route>
          <Route path='/projects' exact>
            <Projects/>
          </Route>
          <Route path='/contact' exact>
            <Contact/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
