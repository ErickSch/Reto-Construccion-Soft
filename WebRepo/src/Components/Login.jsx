import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Login() {
    const loginUrl = 'http://localhost:5000/login';
    const getSessionUser = 'http://localhost:5000/getSessionUser';
    const navigateTo = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  axios.defaults.withCredentials = true;
  const handleSubmit = async (e) => {
    e.preventDefault();

    
  
    try {
      // Send a POST request to the server with the login data
      const response = await axios.post(loginUrl, { username, password });
      // localStorage.setItem("token", response.data.token);
      // Handle the response
      if (response.status === 200) {
        const sessionUserRes = await axios.get(getSessionUser);
        const sessionUser = sessionUserRes.data.user
        setMessage('Login successful');
        navigateTo(`/perfil/${sessionUser}`);
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in');
    }
  };

  

  return (
    <div>
      <h2>Login</h2>
      <div className="card mb-4">
      <p><b>Ususario de prueba: </b></p>
      <p>Username: prueba</p>
      <p>Password: 123 </p>

      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link className='btn me-1 text-white' to="/perfil/1" style={{ backgroundColor: "rgb(237, 139, 68)" }}>Perfil</Link>
      <p className='text-muted'>Para ver perfil tienes que iniciar sesión.</p>
      {message && <p>{message}</p>}
    </div>
  );
}
