import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import IT_Home from './Pages/IT/Home';
import IT_About from './Pages/IT/About';
import IT_Resume from './Pages/IT/Resume';
import IT_Project from './Pages/IT/Project'
import Navbar from "./components/navbar"

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/it/*" element={<Navbar />}>
          <Route index element={<IT_Home />} />

          <Route path = "Home" element ={<IT_Home />} />
          <Route path = "Project" element ={<IT_Project/>} />
          <Route path = "About" element ={<IT_About />} />
          <Route path = "Resume" element ={<IT_Resume />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
