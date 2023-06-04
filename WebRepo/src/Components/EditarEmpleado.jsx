import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function EditarEmpleado() {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const editUrl = `http://localhost:5000/updatepeople/${id}`;
  const getEmployeeUrl = `http://localhost:5000/getpeople/${id}`;

  const [formValue, setFormValue] = useState({
    Name: '',
    Age: '',
    City: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(getEmployeeUrl);
      const { Name, Age, City } = response.data;
      setFormValue({ Name, Age, City });
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(editUrl, formValue);
      if (response.status === 200) {
        setMessage('Employee updated successfully');
        navigateTo('/Administracion');
      }
    } catch (error) {
      console.error('Error updating employee:', error);
      setMessage('Error updating employee');
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
                <input
                  type="text"
                  name="Name"
                  className="form-control"
                  value={formValue.Name}
                  onChange={handleInput}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <b>Edad:</b>
                <input
                  type="number"
                  name="Age"
                  className="form-control"
                  value={formValue.Age}
                  onChange={handleInput}
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                <b>Ciudad:</b>
                <input
                  type="text"
                  name="City"
                  className="form-control"
                  value={formValue.City}
                  onChange={handleInput}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Actualizar
            </button>
            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
