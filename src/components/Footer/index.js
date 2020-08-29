import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <>
      <footer className="navbar navbar-expand bg-dark fixed-bottom justify-content-center border-info border-top">
        <a className="nav navbar-item nav-link text-info" href="https://www.linkedin.com/in/mattmeleen/"><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn</a>
        <a className="nav navbar-item nav-link" href="https://github.com/mmeleen"><FontAwesomeIcon icon={['fab', 'github']} /> Github</a>
      </footer >
    </>
  );
}

export default Footer;