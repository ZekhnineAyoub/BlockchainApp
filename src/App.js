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


  useEffect(() => {
    loadWeb3();
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
