import React from "react";
import "./App.css";
import { NavBar } from "./NavBar";
import Inicio from "./Inicio";
import Login from "./Login"; 
import Banner from "./Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar Router y Routes

const App = () => {
    return (
        <Router>
            <NavBar />
            <Banner/>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
      
    );
};

export default App;
