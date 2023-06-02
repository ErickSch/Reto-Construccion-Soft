import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function TablaABC() {
    // no se como me llegue la fechNac, si es Date cambiar a string supongo pero supondre que como string.
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
        <div className="container">

        <Link className='btn m-1 text-white' to="/Administracion/AgregarEmpleado" style={{backgroundColor: "rgb(10, 108, 14)"}}>Agregar</Link>

            <table className='table'>
                <thead>
                    <tr>
                        {/* info personal general */}
                        {/* <th style={{width:"5em"}}>Id</th> */}
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0,5).map((item, index) => (
                        <tr key={index}>
                            <td>{item.Id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.City}</td>
                            {/* hacer render view con el id para mostrar cada cosa del item con ese id, en este caso id solo es el index en la tabla */}
                            {/* en chrome me sale el border de esto muy grande y en firefox no sale para nada esta muy raro */}
                            <td className="buttons">
                                <div className="buttonsContainer">
                                    <Link className='btn me-1 text-white' to="/Administracion" style={{backgroundColor: "rgb(237, 139, 68)"}}>Ver</Link>
                                    <Link className='btn me-1 text-white' to="/Administracion/EditarEmpleado/{item.EmployeeID}"style= {{backgroundColor: "rgb(109, 102, 98)"}}>Editar</Link>
                                    <Link className='btn btn-danger me-1' to="/Administracion">Eliminar</Link>
                                    
                                    </div>
                                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        
    )
}