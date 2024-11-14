// modules/Dashboard/Dashboard.js
import React, { useEffect } from 'react';
import config from './config';
import './Dashboard.css';

function Dashboard() {
  useEffect(() => {
    if (config.requireAuthentication) {
      // Lógica para verificar sesión activa
      const isAuthenticated = checkSession();
      if (!isAuthenticated) {
        // Redirigir o mostrar mensaje de autenticación
        console.log("Sesión no activa. Redirigiendo...");
      }
    }
  }, []);

  const checkSession = () => {
    // Aquí iría la lógica para validar la sesión (placeholder por ahora)
    return true; // Cambia según sea necesario
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="cards">
        <div className="card">Equipos</div>
        <div className="card">Licencias</div>
        <div className="card">Accesorios</div>
        <div className="card">Personas</div>
        <div className="card">Celulares</div>
      </div>
    </div>
  );
}

export default Dashboard;
