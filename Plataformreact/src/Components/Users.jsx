import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8081/auth/users')
    .then(result => {
      if(result.data.Status) {
        setUsers(result.data.Result);
      }else{
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
        <Navbar />
        <div className='px-5 mt-3'>
        <div className='d-flex justify-content-center'>
          <h3>Usuarios</h3>
        </div>
        <Link to="/add_users" className='btn btn-success'>Agregar Usuarios</Link>
      </div>
      <div className='mt-2'>
        <table className='table table-sm'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(e => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>
                <Link to={'/edit_users/'+e.id} className='btn btn-sm btn-info'>Editar</Link>
                <Link className='btn btn-warning btn-sm' onClick={() => handleDelete(e.id)}>Eliminar</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
