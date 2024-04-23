import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'

export const EditUsers = () => {
    const {id} = useParams()
    const [users, setUsers] = useState({
        name: '',
        email: '',
        password: '',
        address: ''
      });

  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8081/auth/users/'+id)
    .then(result => {
        setUsers({
            ...users,
            name: result.data.Result[0].name,
            email: result.data.Result[0].email,
            address: result.data.Result[0].address,
        })
    }).catch(err => console.log(err))
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:8081/auth/edit_users/'+id, users)
    .then(result => {
      if(result.data.Status) {
        navigate('/users')
    } else{
        alert(result.data.Error)
    }
    }).catch(err => console.log(err))
  }

  return (
    <div><Navbar/>
    <div className='d-flex justify-content-center align-items-center vh-95'>
    <div className='p-3 rounded w-25 border'>
        <h2>Editar Usuarios</h2>
        <form className='row g-1' onSubmit={handleSubmit}>
          <div className='col-12'>  
            <label for="inputName">Name</label>      
          <input
            type='text'
            className='form-control roundes-0'
            id='inputName'
            placeholder='Enter name'
            value={users.name}
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
            value={users.email}
            onChange={(e) => setUsers({...users, email: e.target.value})}>
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
            value={users.address}
            onChange={(e) => setUsers({...users, address: e.target.value})}>
            </input>
          </div>
            <button type='submit' className='btn btn-primary w-100'>Actualizar usuario</button>
        </form>
    </div>
    </div>
    </div>
  )
}
