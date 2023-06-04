import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
  const postUrl = 'http://localhost:5000/postpeople';
  const navigateTo = useNavigate();

  const [formValue, setFormValue] = useState({
    Name: '',
    Age: '',
    City: ''
  });
  const [message, setMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputValue = {
      Name: formValue.Name,
      Age: formValue.Age,
      City: formValue.City
    };

    try {
      const response = await axios.post(postUrl, allInputValue);
      if (response.status === 200) {
        setMessage('Person added successfully');
        setFormValue({ Name: '', Age: '', City: '' });
        navigateTo('/Administracion'); // Redirect to /Administracion
      }
    } catch (error) {
      console.error('Error adding person:', error);
      setMessage('Error adding person');
    }
  };

  return (
    <div style={{ marginLeft: '500px' }}>
      <div className="container">
        <div className="col-5 card p-3 my-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">
                <b>Nombre:</b>
                <input type="text" name="Name" className="form-control" value={formValue.Name} onChange={handleInput} />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <b>Edad:</b>
                <input type="number" name="Age" className="form-control" value={formValue.Age} onChange={handleInput} />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <b>Ciudad:</b>
                <input type="text" name="City" className="form-control" value={formValue.City} onChange={handleInput} />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
