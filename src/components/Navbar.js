import "./NavbarStyles.css";
import React, { useState } from "react"
import { Link } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa"

const Navbar = () => {

  const [show,setShow] = useState(false)
  const handleClick = ()=>{setShow(!show)}
  return (
    <div className="header">
      <Link to="/">
      <h1>SSS</h1>
      </Link>
      <ul className={show?"nav-menu":"nav-menu active"}>
        {/* <li>
          <Link to="/">Home</Link>
        </li> */}
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick} >
        {show
        ?(<FaBars size={20} style={{color:"#fff"}}/>)
        :(<FaTimes size={20} style={{color:"#fff"}}/>)}
      </div>
    </div>
  )
};

export default Navbar;
