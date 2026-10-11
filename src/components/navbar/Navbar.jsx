import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from '../home/Home'
export default function Navbar() {
    const navigate = useNavigate;
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-primary">

        <a href="/home" className='navbar-brand'>EMS</a>
        
        <ul className= "navbar-nav mr-auto" >
            <li className='nabarBtn' onClick={() => navigate("/")}>Home</li>
            <li className='nabarBtn' onClick={() => navigate("/addEmp")}>Add Employee</li>
            <li className='nabarBtn' onClick={() => navigate("/About")}>About Us</li>
        </ul>

        <div className="navbar-toggler" type = 'button' data-toggle = 'collapse'>

        </div>


      </div>
    </div>
  )
}
