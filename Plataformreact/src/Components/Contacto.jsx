import React from 'react'
import Navbar from './Navbar'
import './Contacto.css'
import { Footer } from './Footer'

const Contacto = () => {
  return (
    <div>
    <Navbar />
    <div className="contacto-container">
      <div className="contacto-content">
        <h2>Informacion de la empresa</h2>
        <p>
          <strong>Empresa:</strong> JBL Systems
        </p>
        <p>
          <strong>Correo:</strong> jblsystems@gmail.com
        </p>
        <p>
          <strong>Teléfono:</strong> +123 456 789
        </p>
        <p>
          <strong>Redes Sociales:</strong>
          {/* Agrega aquí los iconos de tus redes sociales, puedes utilizar FontAwesome u otra librería de iconos */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          {/* Agrega más iconos según sea necesario */}
        </p>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Contacto