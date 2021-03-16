import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg" style={{color: 'white'}}>
      <Link to="/" className="navbar navbar-brand me" >Kelli King</Link>
      <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" 
      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to="/contact" className="nav-link" >Contact</Link>
          </li>
          <li className="nav-item">
              <Link to="/portfolio" className="nav-link active">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">About <span className="sr-only">(current)</span></Link>
          </li>        
        </ul>
      </div>      
    </nav>  
    )
}

export default Navbar