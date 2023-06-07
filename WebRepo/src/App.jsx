import { useState, useEffect } from 'react'
import './App.css'
import UnityComponent from './Components/UnityComponent.jsx'
import TerniumHeader from './Components/TerniumHeader'
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Juego from './Components/Juego.jsx';
import Perfil from './Components/Perfil.jsx';
import Perfiles from './Components/Perfiles.jsx';
import Puntuaciones from './Components/Puntuaciones.jsx';
import Administracion from './Components/Administracion';
import EditarEmpleado from './Components/EditarEmpleado';
import AgregarEmpleado from './Components/AgregarEmpleado';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [isloggedin, setIsloggedin] = useState(false)
  function loggedin() {
    setIsloggedin(!isloggedin);
  }
  if (isloggedin === false) {
    // activar si esta el API activado
    // return (<Login onLogIn={loggedin}/>)
  }
  // en realidad esto tiene que pasar cuando haga submit al form
  // useEffect(() => {
  //   async function getLogin() {
  //   const [submitted, setSubmitted] = useState(false);
  //     //hacer un post request a la base de datos con el user y pass
  //     const response = await fetch();
  //     const jsonResponse = await response.json();
  //     // si nos regresa que no se encontro el password hacemos algo, lo volvemos a ejecutar creo.
  //     if (response == "404") {
  //       // creo que quitar esto porque no hace lo que pienso
  //       getLogin();
  //     }
  //     setLogin({user: response.user, pwd: response.pwd});
  //   }
  //   getLogin();
  // }, [])

  return (
    <>
      <TerniumHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Juego" element={<Juego />} />
        <Route path="/Perfiles" element={<Perfiles/>} />
        <Route path="/Puntuaciones" element={<Puntuaciones />}/>
        <Route path="/Administracion" element={<Administracion />}></Route>
        <Route path="/Administracion/EditarEmpleado/:id" element={<EditarEmpleado/>}></Route>
        <Route path="/Administracion/AgregarEmpleado" element={<AgregarEmpleado/>}></Route>

        <Route path="/Registro" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/perfil/:id" element={<Perfil/>} />
      </Routes>
    </>
  )
}

export default App
