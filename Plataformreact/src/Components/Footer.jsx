import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <footer>
    <div>
        <h3>Información de la Empresa</h3>
        <p></p>
    </div>
    <div>
        <h3>Redes Sociales</h3>
        <ul>
            <li><a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </div>
    <div>
        <h3>Preguntas Frecuentes</h3>
        <form action="/submit-pregunta" method="post">
            <label htmlFor="pregunta">Haz tu pregunta:</label>
            <input type="text" id="pregunta" name="pregunta" placeholder="Escribe tu pregunta aquí" />
            <button type="submit">Enviar</button>
        </form>
    </div>
</footer>
  )
}
