import Home from "./Home";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Creer from "./pages/Creer";
import List from "./components/List";
import MoveInformation from "./components/MoveInformation";
import React, {useEffect } from 'react';
import Web3 from 'web3';
import Marketplace from './abis/Marketplace.json'

const App = () => {

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
  const loadBlockchainData=async()=>{
    const web3 = window.web3;
    const abi = Marketplace.abi
    const address = Marketplace.networks[5777].address
    const marketplace= new web3.eth.Contract(abi,address)
    console.log(marketplace);
  }

  useEffect(() => {
    loadWeb3();
    loadBlockchainData()
    //console.log(Marketplace.abi,Marketplace.networks[5777].address)
  });

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Creer", element: <Creer /> },
    { path: "/List",element:<List/>},
    { path: "/CardDetails",element:<MoveInformation/>},
  ]);
  return routes;
};

const AppWrapper = () => {

  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
