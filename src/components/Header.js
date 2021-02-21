import './css/Header.css';
import React, { useEffect } from 'react';

const Header = () => {
  let dropdown = null;
  const toggleDropdown = () => {
    dropdown.classList.toggle("dropdown--hidden");
  }

  useEffect(() => {
    dropdown = document.querySelector(".dropdown");
  })


  return (
    <div>
      <h1 className="header-h1">ARTHOLE
        <span onClick={toggleDropdown} className="navburger-span"><div></div></span>
      </h1>
      <div className="dropdown dropdown--hidden">
        <a href="/" className="dropdown_link">home</a>
        <a href="/" className="dropdown_link">messages</a>
        <a href="/" className="dropdown_link">applicants</a>
        <a href="/" className="dropdown_link">settings</a>
        <a href="/" className="dropdown_link">logout</a>
      </div>
    </div>
  )
}

export default Header;