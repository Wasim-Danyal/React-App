import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Canvas from "./components/Canvas/Canvas";
import Main from "./components/Main";

function App() { 
  return ( 
    <div className="App"> 
    <Navbar />
    <Main />
    <Canvas />
    </div> 
  ); 
} 
   
export default App; 