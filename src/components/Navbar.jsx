import React from 'react'
import logo from "./logo.png"
import { NavLink } from 'react-router-dom'
 import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
    <div className="head">
    <img src={logo} alt="" />
    <h2>PATNA MUSLIM HIGH SCHOOL</h2>
    <h2>پٹنہ مسلم ہائی اسکول </h2>
    <h2>पटना मुस्लिम हाई स्कूल</h2>
    </div>

    <div className="list">
    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          HOME
        </NavLink>

         

        <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
      FACILITIES
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        ABOUT
        </NavLink>
        <NavLink to="/admission" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          ADMISSION
        </NavLink>
    </div>
    

</nav>
  )
}

export default Navbar
