import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registrarse = () => {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/auth/add_users', users)
      .then(result => {
        if (result.data.Status) {
          navigate('/adminlogin');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center vh-95'>
        <div className='p-3 rounded w-25 border'>
          <h2>Ingresa tus datos:</h2>
          <form className='row g-1' onSubmit={handleSubmit}>
            <div className='col-12'>  
              <label htmlFor="inputName">Nombre</label>      
              <input
                type='text'
                className='form-control rounded-0'
                id='inputName'
                placeholder='Ingresa tu nombre'
                onChange={(e) => setUsers({...users, name: e.target.value})}
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputEmail' className='form-label'>Correo electrónico</label>
              <input
                type='email'
                className='form-control rounded-0'
                id='inputEmail'
                placeholder='Ingresa tu correo electrónico'
                autoComplete='off'
                onChange={(e) => setUsers({...users, email: e.target.value})}
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputPassword' className='form-label'>Contraseña</label>
              <input
                type='password'
                className='form-control rounded-0'
                id='inputPassword'
                placeholder='Ingresa tu contraseña'
                onChange={(e) => setUsers({...users, password: e.target.value})}
              />
            </div>
            <div className='col-12'>
              <label htmlFor='inputAddress' className='form-label'>Dirección</label>
              <input
                type='text'
                className='form-control rounded-0'
                id='inputAddress'
                placeholder='Ingresa tu dirección'
                autoComplete='off'
                onChange={(e) => setUsers({...users, address: e.target.value})}
              />
            </div>
           <button type='submit' className='btn btn-primary w-100'>Registrate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
