import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useContext} from 'react';
import { logoutUser } from "../services/authentication";
import {myContext} from "../../../context/MyContext"

export default function Navbar() {
    const image_link = "https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg";
    const { user, setUser } = useContext(myContext);
    const navigate = useNavigate();
    
    const handleLogOut = async() => {
      try {
        await logoutUser()
        alert("Logged Out......")
        setUser(null)
        navigate('/login');
      } catch (error) {
        alert("Some unexpected things happend....")
        
      }
    }
  
    return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/" className='navbar-brand'>
            <h4 className="fw-bold mb-3">
              Employee<span className="text-light">MS</span>
            </h4>
          </Link>
          <button className='navbar-toggler ms-auto' type = "button" data-bs-toggle = "collapse" data-bs-target="#navbar_menu" aria-expanded="false" aria-label="Toggle Navigation">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id="navbar_menu">
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/home")}>Home</li>
              <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/about")}>AboutUs</li>
              <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/addEmp")}>Add Employee</li>
              <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/showEmp")}>Show Employees</li>
            </ul>
          </div>


          <div className="dropdown dropdown-image ms-auto">
            <img src = {image_link} alt="profile_image" type = 'button' height="40" width="40" className='dropdown-toggle  rounded-circle' data-bs-toggle= "dropdown"  aria-expanded="false" />

            <ul className="dropdown-menu dropdown-menu-end">
              <Link to = "/login" className='text-decoration-none text-dark fw-semibold dropdown-item'>Login</Link>
              <Link to = "/register" className='text-decoration-none text-dark fw-semibold dropdown-item '>Register</Link>
              <Link to = "/help" className='text-decoration-none text-dark fw-semibold dropdown-item'>Help</Link>
              <li className='dropdown-item' onClick={handleLogOut}>LogOut</li> 
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}