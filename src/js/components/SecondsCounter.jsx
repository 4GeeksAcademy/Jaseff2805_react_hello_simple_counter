// Importación inicial de React
import React from "react";

// Función para obtener dígitos individuales
const getDigit = (num,position) => {
    return Math.floor(num / Math.pow(10,position)) % 10;
}

// Creación del componente SecondsCounter
// Se crea 
const SecondsCounter = ({seconds}) => {
    return (
        <div className="text-center mt-5">
            <div className="counter-display d-flex justify-content-center align-items-center">
                <div className="clock-digit bg-dark text-white">
                    <i className="fa fa-clock fa-2x"></i>
                </div>
                {[5,4,3,2,1,0].map((pos) => (
                    <div key={pos} className="digit bg-dark text-white">
                        {getDigit(seconds,pos)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecondsCounter;






