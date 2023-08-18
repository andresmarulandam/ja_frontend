import React from "react";
import Register from "./pages/Register.jsx";
import Login from './pages/Login.jsx'; // Asegúrate de usar la misma capitalización que en el archivo
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Cambio de 'Route' a 'Routes'
import Home from './pages/Home'; 

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} /> {/* Agregada cerradura de etiqueta faltante */}
      </Routes>
    </Router>
  );
}

export default App;

