import React from 'react'
import './About.css'
import mission from '../../public/Images/mision.jpg'
import vision from '../../public/Images/vision.jpg'
import Navbar from './Navbar'
import { Footer } from './Footer'

function About() {
  return (
    <div>
    <Navbar />
    <div className="about-container">
      <section className="mission-section">
        <h2>Misión</h2>
        <p>
          Brindar el canal de comunicacion entre proveedores y propietarios de abarrotes con la mayor seguridad, eficencia y rapidez.
        </p>
        <img
          src={mission}
          alt="Misión"
          className="mission-image"
        />
      </section>

      <hr className="divider" />

      <section className="vision-section">
        <h2>Visión</h2>
        <p>
          Ser la plataforma lider del sur.este en la gestion de productos de abarrotes.
        </p>
        <img
          src={vision}
          alt="Visión"
          className="vision-image"
        />
      </section>
    </div>
    <Footer/>
    </div>
  )
}

export default About