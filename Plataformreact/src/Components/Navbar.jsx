import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true
    const handleCerrar = () => {
        axios.get('http://localhost:8081/auth/cerrar')
        .then(result => {
            if(result.data.Status){
                localStorage.removeItem("valid")
                navigate('/')
            }else {
                console.error('Error al cerrar sesión:', result.data);
              }
            })
            .catch(error => {
              console.error('Error en la solicitud de cerrar sesión:', error);
            });
        };
    return (
        <nav className="navbar">
            <NavLink to="/dashboard" exact activeClassName="active">Inicio</NavLink>
            <NavLink to="/users" activeClassName="active">Usuarios</NavLink>
            <NavLink activeClassName="active" onClick={handleCerrar}><span className='ms-2 d-done d-sm-inline'>Cerrar Sesion</span></NavLink>
        </nav>
    );
}

export default Navbar;