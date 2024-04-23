import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUsers = () => {
  const [users, setUsers] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8081/auth/add_users', users)
    .then(result => {
      if(result.data.Status) {
        navigate('/users')
    }else{
      alert(result.data.Error)
    }
    })
    .catch(err => console.log(err))
  }

  return (
    <div><Navbar/>
    <div className='d-flex justify-content-center align-items-center vh-95'>
    <div className='p-3 rounded w-25 border'>
        <h2>Añadir Usuarios</h2>
        <form className='row g-1' onSubmit={handleSubmit}>
          <div className='col-12'>  
            <label for="inputName">Name</label>      
          <input
            type='text'
            className='form-control roundes-0'
            id='inputName'
            placeholder='Enter name'
            onChange={(e) => setUsers({...users, name: e.target.value})}>
            </input>
          </div>
          <div className='col-12'>
            <label for='inputEmail' className='form-label'>Email</label>
            <input
            type='email'
            className='form-control roundes-0'
            id='inputEmail'
            placeholder='Enter Email'
            autoComplete='off'
            onChange={(e) => setUsers({...users, email: e.target.value})}>
            </input>
          </div>
          <div className='col-12'>
            <label for='inputPassword' className='form-label'>Password</label>
            <input
            type='password'
            className='form-control roundes-0'
            id='inputPassword'
            placeholder='Enter Password'
            onChange={(e) => setUsers({...users, password: e.target.value})}>
            </input>
          </div>
          <div className='col-12'>
            <label for='inputAddress' className='form-label'>Address</label>
            <input
            type='text'
            className='form-control roundes-0'
            id='inputAddress'
            placeholder='1234 Main st'
            autoComplete='off'
            onChange={(e) => setUsers({...users, address: e.target.value})}>
            </input>
          </div>
            <button type='submit' className='btn btn-primary w-100'>Añadir</button>
        </form>
    </div>
    </div>
    </div>
  )
}

export default AddUsers