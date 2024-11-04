//import React from "react";

import PropTypes from 'prop-types';
//import logo from '../../../public/img/logoRobots.png'; 
import unitedKi from '../../../public/img/unitedKi.svg';
import sweden from '../../../public/img/sweden.svg';
import { navLinks } from '../../data'; 




function Header({ imageSrc, imageAlt, brandUrl}) {
  return (
    <header>
    <div className="barra1">
        <ul className="imglenguage" type="none">
          <li> <a href="language/english.html"><img className="imgbarra1" src={unitedKi} alt="bandera del reino unido"/></a> </li>
          <li> <a href="language/svenska.html"><img className="imgbarra1" src={sweden} alt="bandera de suecia"/></a> </li>
      </ul>
      </div>

      

    <nav className="nav">
      <div>
          <a href={brandUrl}> <img className="nav__logo" src={imageSrc} alt={imageAlt} /></a>
      </div>
        <ul className="nav__home" type="none" >
          {navLinks.map((link, index) => (

            <li className="nav__link" key={index}> 
              <a href={link.path}> <i className="bi bi-globe-central-south-asia">
              </i>{link.name}</a> </li>
            
            ))}
      </ul>
    </nav>
  </header>
  )
}



Header.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  brandUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
}

export default Header;
