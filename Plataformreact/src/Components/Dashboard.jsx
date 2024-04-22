import React from 'react'
import './Dashboard.css'
import home from '../../public/Images/home.jpg'
import Navbar from './Navbar'
import { Footer } from './Footer'

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <img src={home} alt="JBL Systems" className="home-image" />
      <p className="company-text">
        "JBL Systems" permite la gestión de pedidos con sus asociados al momento de abastecerse. Esto es favorable para la localidad de Venustiano Carranza porque permite que proveedores y propietarios interactúen entre sí.
      </p><br></br>
      <Footer />
    </div>
  )
}
