import { Routes , Route , useLocation } from "react-router-dom" ;
import './App.scss'
import Home from "./containers/home" ;
import About from "./containers/about" ;
import Skills from "./containers/skills" ;
import Resume from "./containers/resume" ;
import Projects from "./containers/projects" ;
import Contact from "./containers/contact" ;
import NavBar from "./components/navBar" ;

function App() {
  const location = useLocation();
  return (
      <div className='App'>
       
        <NavBar />
        <div className="App__main-page-content">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
  )
}

export default App
