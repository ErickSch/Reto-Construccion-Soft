import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function TablaABC() {
  const url = 'http://localhost:5000/getpeople';
  const deleteUrl = 'http://localhost:5000/deletepeople';

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const deletePerson = (id) => {
    axios.delete(`${deleteUrl}/${id}`)
      .then(() => {
        setData(data.filter(item => item.Id !== id));
      })
      .catch((error) => {
        console.error('Error deleting person:', error);
      });
  };

  return (
    <div className="container">
      <Link className='btn m-1 text-white' to="/Administracion/AgregarEmpleado" style={{ backgroundColor: "rgb(10, 108, 14)" }}>Agregar</Link>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.slice(0, 5).map((item, index) => ( */}
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>{item.City}</td>
              <td className="buttons">
                <div className="buttonsContainer">
                  <Link className='btn me-1 text-white' to="/Administracion" style={{ backgroundColor: "rgb(237, 139, 68)" }}>Ver</Link>
                  <Link className='btn me-1 text-white' to={`/Administracion/EditarEmpleado/${item.Id}`} style={{ backgroundColor: "rgb(109, 102, 98)" }}>Editar</Link>
                  <button className='btn btn-danger me-1' onClick={() => deletePerson(item.Id)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
