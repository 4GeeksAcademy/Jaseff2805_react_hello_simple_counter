import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

// components
// Importación del componente creado
import SecondsCounter from './components/SecondsCounter';

// Contenedor de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Definición de Variables globales
let seconds = 0;

// Función para actualizar el contador
setInterval(() => {
  seconds++;
  renderCounter();
},1000);

// Función para renderizar el contador
const renderCounter = () => {
  root.render(
    <React.StrictMode>
      <SecondsCounter seconds={seconds} />
    </React.StrictMode>,
  );
};

// Inicializar el contador
renderCounter();
