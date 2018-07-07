import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header vertical-center">
          <div className="container">
            <a href="/">
            <img id="logo" src="https://www.breaker.audio/assets/breaker-logo-8b35ee4ae36d80d707117bb718bf6ba5edb88e2118d28b9f90a84c2e2ed8636f.svg" alt="Breaker logo" width="100" height="100"></img>
            </a>
          </div>
        </div>
    );
  }
}

export default Header;


