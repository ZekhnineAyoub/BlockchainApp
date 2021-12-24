import React from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/fontawesome-free-solid'


const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ padding: "3px" ,borderRadius:3 }}>
        <a className="navbar-brand" href="#/">
        <img width="80px" height="auto" className="img-responsive" src={logo}  alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link h5" href="/">
              Accueil  </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5" href="/Creer">
                Créer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5" href="/List">
                List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link h5" href="/About">
               About
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link h6" href="#/">Adresse: 5322462562306445</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link h6" href="#/"><FontAwesomeIcon icon={faIdCard} /></a>
            </li>
        </ul>
    </div>
      </nav>
  );
};

export default Navbar;
