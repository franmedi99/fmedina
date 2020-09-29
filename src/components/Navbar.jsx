import React from 'react'
import { Link }from "react-router-dom";
const Navbar = () => {
    return (
      <div>
        		<header>
			<div className="logo">
			<div className="author-img" style={{backgroundImage: 'url(https://res.cloudinary.com/franciscorp/image/upload/v1601389042/about_zsja8a.jpg)'}} />
				<h1>Francisco Medina</h1>
				<p className="text-center">Desarrollador de Software Profesional</p>
			</div>

			<div className="categorias" id="categorias">
        		<Link className="activo" to="/">Inicio</Link>
				<Link to="/Xp">Experiencia</Link>
				<Link to="/languages">Lenguajes</Link>
				<Link to="/proyects">Proyectos</Link>
        		<Link to="/contact_me">Contáctame</Link>
        
			</div>
      <hr />
		</header>
    
      </div>
    )
}

export default Navbar
