import React from 'react'
import react from './assets/images/react.png';
import node from './assets/images/node.png';
import java from './assets/images/java.png';
import sql from './assets/images/sql.png';
import mongodb from './assets/images/mongodb.png';
const Index = () => {
    return (
        <div className="container" style={{ textAlign: "justify" }}>
            <h3 className="text-center mb-4">Sobre mí</h3>

            <i style={{ color: "gray" }}>
                Me apasiona crear soluciones que no solo funcionen, sino que escalen y evolucionen con el tiempo.
            </i>
            <p className="mt-3">
                Soy un desarrollador full stack con mas de 3 años de experiencia en Node.js, React.js, Java, SQL y NoSQL. Me especializo en construir
                aplicaciones eficientes y escalables, con conocimientos en continuous deployment y desarollo de aplicaciones. Disfruto
                trabajar en equipo, resolver problemas complejos y aprender nuevas tecnologías.
            </p>

            <h3 className="text-center mb-4">Stack Tecnológico Principal</h3>
            <p className="text-center mb-4">

                <img src={node} alt="Node"  style={{ width: "30px", height: "30px" }} /> Node.js
                <img src={java} alt="java" className="ml-3" style={{ width: "30px", height: "30px" }} />  Java
                <img src={react} alt="React" className="ml-3" style={{ width: "30px", height: "30px" }} /> React.js
                <img src={sql} alt="SQL" className="ml-3" style={{ width: "30px", height: "30px" }} />  SQL
                <img src={mongodb} alt="NOSQL" className="ml-3" style={{ width: "30px", height: "30px" }} />  NoSQL
            </p>

            <h3 className="text-center mb-4">Cómo trabajo y qué me motiva</h3>
          
                <div className="rounded-lg shadow-md bg-white pl-4 pb-2">
                    <strong>Arquitectura backend sólida:</strong>
                    <p>
                    Diseño y desarrollo de sistemas robustos, escalables y eficientes, priorizando buenas prácticas y mantenibilidad.
                    </p>
                </div>

                <div className="rounded-lg shadow-md bg-white pl-4 pb-2">
                    <strong className="text-xl">Optimización de bases de datos:</strong>
                    <p>
                    Modelado eficiente, consultas optimizadas y gestión de SQL/NoSQL para garantizar alto rendimiento y escalabilidad.
                    </p>
                </div>

                <div className="rounded-lg shadow-md bg-white pl-4">
                    <strong className="text-xl">Seguridad y buenas prácticas:</strong>
                    <p>
                    Manejo seguro de datos, autenticación/autorización y prevención de vulnerabilidades en APIs y sistemas backend
                    </p>
                </div>
            
        </div>
    )
}

export default Index
