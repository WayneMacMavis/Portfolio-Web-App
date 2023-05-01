import React, { useState } from "react";
import menuItems from "./MenuItems";
import { Link } from "react-scroll";
import "./style.css";

import { FaTimes, FaBars, FaReact } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      
        <FaReact className="navbar-logo" size={50} />
  
      <div className="menu-icon" onClick={handleClick}>
        {active ? <FaTimes size={40} /> : <FaBars size={40} />}
      </div>

      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <Link onClick={handleClick}
            to={item.url}
            spy={true}
            smooth={true}
            offset={-80}
            className={item.cName}
            style={{ textDecoration: "none" }}
          >
            <li key={index}>{item.title}</li>
          </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;