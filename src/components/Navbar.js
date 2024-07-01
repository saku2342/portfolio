import React from 'react'
import '../css/Nav.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg py-4">
  <div className="container">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/about" >About</Link>
          {/* <a className="nav-link" href="#">About</a> */}
        </li>
        <li className="nav-item">
        
        <Link className="nav-link" to="/resume" >Resume</Link>
       
        </li>
        <li className="nav-item">
   
        <Link className="nav-link" to="/mywork" >Portfolio</Link>
        
        </li>
       
       
      </ul>
      
      
        <button class="btn nav-btn">+91 9883741453</button>
  
    </div>
  </div>
</nav>
      </>
    </div>
  )
}

export default Navbar
