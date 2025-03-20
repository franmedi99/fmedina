import React from 'react'

const ContactMe = () => {
    return (
        <div className="container">
<h2 className='text-center'>Te interesa trabajar conmigo? Escríbeme en <a href="https://linkedin.com/in/francisco-medina99"  target="_blank" rel="noopener noreferrer">LinkedIn</a>.</h2>
    <div className="contact-info">
    <div className="carta">
        <i className="fa fa-envelope icon" aria-hidden="true"></i>
        <div className="carta-content">
            <h3>email</h3>
            <span><a href="mailto:franmedi99@gmail.com" target="_blank" rel="noopener noreferrer">franmedi99@gmail.com</a></span>
        </div>
    </div>
    <div className="carta">
        <i className="fa fa-mobile icon" aria-hidden="true"></i>
        <div className="carta-content">
            <h3>Telefono</h3>
            <span><a href="tel:2236870198" target="_blank" rel="noopener noreferrer">223 6870198</a></span>
        </div>
    </div>
    <div className="carta">
        <i className="fa fa-map-marker icon" aria-hidden="true"></i>
        <div className="carta-content">
            <h3>ubicación</h3>
            <span><a href="https://www.google.com/maps/place/Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0174831,-57.7409623,11z/data=!3m1!4b1!4m5!3m4!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106?hl=es-419" target="_blank" rel="noopener noreferrer">Mar del plata</a></span>
        </div>
    </div>
    <div className="carta">
        <i className="fa fa-github icon" aria-hidden="true"></i>
        <div className="carta-content">
            <h3>Github</h3>
            <span><a href="https://github.com/franmedi99" target="_blank" rel="noopener noreferrer">franmedi99</a></span>
        </div>
    </div>
    <div className="carta">
        <i className="fa fa-linkedin icon" aria-hidden="true"></i>
        <div className="carta-content">
            <h3>Linkedin</h3>
            <span><a href="https://linkedin.com/in/francisco-medina99" style={{ fontSize: "15.5px" }} target="_blank" rel="noopener noreferrer">Francisco Medina</a></span>
        </div>
    </div>
</div>
        </div>


    )
}


export default ContactMe
