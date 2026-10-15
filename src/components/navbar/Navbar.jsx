import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    const navigate = useNavigate();
    const image_link = "https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg";
  return (
    <div>
      <nav className="navbar navbar-expand-lg d-flex flex-row">
        <div className="container-fluid">
          <Link to="/" className='navbar-brand'>EMS</Link>
        
          <ul className= "navbar-nav mx-auto mb-2 mb-lg-0">
            <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/")}>Home</li>
            <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/About")}>AboutUs</li>
            <li className='nav-item btn btn-link text-decoration-none mx-2 text-light fw-semibold' onClick={() => navigate("/addEmp")}>Add Employee</li>
          </ul>

          <div className="dropdown dropdown-image ms-auto">
            <img src = {image_link} alt="profile_image" type = 'button' height="40" width="40" className='dropdown-toggle  rounded-circle' data-bs-toggle= "dropdown"  aria-expanded="false" />

            <ul className="dropdown-menu dropdown-menu-end">
              <li className='dropdown-item '><Link to = "/login" className='text-decoration-none text-dark fw-semibold'>Login</Link></li>
              <li className='dropdown-item'><Link to = "/register" className='text-decoration-none text-dark fw-semibold'>Register</Link></li>
              <li className='dropdown-item'><Link to = "/help" className='text-decoration-none text-dark fw-semibold'>Help</Link></li>
              <li className='dropdown-item'>LogOut</li>
              
            </ul>
          </div>
        </div>


      </nav>
    </div>
  )
}
