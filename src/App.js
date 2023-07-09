import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Footer from "./Footer";
import FetchData from "./FetchData";
function App() {
 
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>

        <Route  path="/general" element={<FetchData cat="General"/>}/>
        <Route  path="/business" element={<FetchData cat="business"/>}/>
        <Route  path="/entertainment" element={<FetchData cat="Entertainment"/>}/>
        <Route  path="/health" element={<FetchData cat="Health"/>}/>
        <Route path="/science" element={<FetchData cat="Science"/>}/>
        <Route path="/sports" element={<FetchData cat="Sports"/>}/>
        <Route path="/tech" element={<FetchData cat="Technology"/>}/>
      </Routes>
      <Footer />
    </Router>
      
    </>
   
  );
}
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/"><h5>News Hub</h5></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/general">General</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/tech">Technology</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
