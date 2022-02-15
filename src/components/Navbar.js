import React from "react";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/fontawesome-free-solid'
import {useState,useEffect} from 'react';
import Web3 from 'web3';
//import Marketplace from '../abis/Marketplace.json'

const Navbar = () => {

  const [account, setAccount] = useState([]);

  const loadWeb3=()=>{
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('non ethereum browser detected, check your Metamask! ')
    }

  }
  const loadBlockchainAccount=async()=>{
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0])
    //const abi = Marketplace.abi
    //const address = Marketplace.networks[5777].address
    //const marketplace= new web3.eth.Contract(abi,address)
    //console.log(marketplace);
  }
  useEffect(() => {
    loadWeb3();
    loadBlockchainAccount();
  });


  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ padding: "3px" ,borderRadius:3 }}>
        <a className="navbar-brand" href="/">
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
                <a className="nav-link h6" href="#/">Adresse: {account}</a>
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
