import React from 'react'
import { Link } from "react-router-dom";
import me from './assets/images/me.jpeg';
const Navbar = () => {
	return (
		<div>
			<header>
				<div className="logo">
					<img
						src={me}
						alt="Francisco Medina"
						className="author-img"
					/>
					<h1>Francisco Medina</h1>
					<p className="text-center">Desarrollador de Software Profesional y Personal</p>
				</div>

				<div className="categorias" id="categorias">
					<Link className="activo" to="/">Sobre mí</Link>
					<Link to="/Experience">Experiencia & Proyectos</Link>
					<Link to="/contactMe">Contacto</Link>

				</div>
				<hr />
			</header>

		</div>
	)
}

export default Navbar
