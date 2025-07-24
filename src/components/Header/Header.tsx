import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  // const [dropdown, setDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navItems = [
    { id: 1, title: "Home", path: "./", cName: "nav-item" },
    { id: 2, title: "Services", path: "./services", cName: "nav-item" },
    { id: 3, title: "About Us", path: "./aboutus", cName: "nav-item" },
    { id: 4, title: "Contact Us", path: "./contactus", cName: "nav-item" },
  ];

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/logoFullTrans1.png'} alt="g" className="logo" />
        </Link>
        <div className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul className={isMobile ? "nav-items active" : "nav-items"}>
          {navItems.map((item) => (
            <li key={item.id} className={item.cName}>
              <Link to={item.path} onClick={() => setIsMobile(false)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Header;
