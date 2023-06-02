import UnityComponent from "./UnityComponent.jsx"
import React, { useState, useEffect } from 'react';
import "./styles/Juego.css"
export default function Juego() {
    const url = 'http://localhost:5000/getpeople';
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
    const fetchInfo = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    
    return (
        <div className="Juego">
            <div className="rowContainer">
                <UnityComponent className="unity"/>
                <div className="jugadores">
                    <div className="container-fluid">

                    <h1>Mejores Jugadores:</h1>
                    <ul>
                        {/* obtener estos de gamestat.topscore */}
                        {/* no se como se vera el objeto de javascript, asumo que un array de objetos */}
                    </ul>
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Puntuación</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.slice(0, 5).map((item, index) => (
                            <tr>
                                <th scope="row">{item.ID}</th>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div className="cursos">
                <h1>Mejores cursos para obtener puntos: </h1>
                <ul>
                    <li>Curso 1 - Breve descripcion - 100 puntos</li>
                    <li>Curso 2 - Breve descripcion - 200 puntos</li>
                    <li>Curso 3 - Breve descripcion - 399 puntos</li>
                </ul>
            </div>
        </div>
    )
}