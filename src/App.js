import React from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import Banner from "./Banner";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return (
     <div className="app">
      <NavBar />
       <Banner/>   
        </div>  
      ); 
}

export default App;
