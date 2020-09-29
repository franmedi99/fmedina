import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}from "react-router-dom";
import Inicio from './components/Inicio';
import Contacto from './components/Contact_me';

import Navbar from './components/Navbar';
import Contactme from './components/Contact_me';
import Xp from './components/Xp';
import Lenguajes from './components/Lenguajes';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';







function App() {
  return (
    <Router>
    <div className="ml-2 mr-2">
   
    <Navbar/>
    <div >
      
    <Switch>
           
            <Route path="/Contact_me"><Contactme/></Route>
            <Route path="/contacto"><Contacto></Contacto></Route>
            <Route path="/proyects"><Proyectos></Proyectos></Route>
            <Route path="/languages"><Lenguajes></Lenguajes></Route>
            <Route path="/Xp"><Xp></Xp></Route>
            <Route path="/" exact><Inicio></Inicio></Route>
          </Switch>
        
    </div>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
