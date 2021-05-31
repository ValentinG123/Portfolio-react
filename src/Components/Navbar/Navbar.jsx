import React from 'react'
import '../Navbar/navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg">
    <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Inicio<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyect">Protecto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contacto</a>
            </li> 
          </ul>
        </div>
    </div>
      </nav>
    )
}

export default Navbar
