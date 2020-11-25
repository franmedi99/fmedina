import React from 'react'

const Contact_me = props => {
    return (
        <div className="container">
                  <iframe className="container" style={{height:400, border:"none"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6283.013287893698!2d-57.60428253694903!3d-38.0585804709501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de4b3c9e13ff%3A0x71970ac24bafada1!2sBarrio%20Lomas%20del%20Golf!5e0!3m2!1ses-419!2sar!4v1600794248302!5m2!1ses-419!2sar"></iframe>

        
                  <div className="contact-info">
            <div className="carta">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
            <div className="carta-content">
                <h3>email</h3>
                <span><a href="mailto:franmedi_mdp@hotmail.com">franmedi_mdp@hotmail.com</a> </span>
            </div>
            </div>

            
            <div className="carta">
                <i className="fa fa-mobile icon" aria-hidden="true"></i>
            <div className="carta-content">
                <h3>Telefono</h3>
                <span><a href="tel:2236870198">223 6870198</a></span>
            </div>
            </div>



            <div className="carta">
                <i className="fa fa-map-marker icon" aria-hidden="true"></i>
            <div className="carta-content">
                <h3>ubicación</h3>
                <span><a href="https://www.google.com/maps/place/Mar+del+Plata,+Provincia+de+Buenos+Aires/@-38.0174831,-57.7409623,11z/data=!3m1!4b1!4m5!3m4!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106?hl=es-419">Mar del plata</a> </span>
            </div>
            </div>





        </div>




        <div className="contact-info">
            <div className="carta">
            <i className="fa fa-github icon" aria-hidden="true"></i>
            <div className="carta-content">
                <h3>Github</h3>
                <span><a href="https://github.com/franmedi99">franmedi99</a> </span>
            </div>
            </div>

            
            <div className="carta">
            <i className="fa fa-linkedin icon" aria-hidden="true"></i>
            <div className="carta-content">
                <h3>Linkedin</h3>
                <span><a href="https://www.linkedin.com/in/francisco-medina-84797019a/" style={{fontSize: "15.5px"}}>Francisco Medina</a></span>
            </div>
            </div>








        </div>


    </div>


    )
}


export default Contact_me
