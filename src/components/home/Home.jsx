import { Link } from 'react-router-dom'; 
import './Home.css';

export default function Home() { 
  return ( 
  <div className="container py-5"> 
    <div className="p-5 mb-4 bg-light rounded-3"> 
      <div className="container-fluid py-3"> 
          <h1 className="display-5 fw-bold">Employee Management System </h1>
          <p className="col-md-8 fs-5 text-secondary"> 
            Manage employee information, organize records, and streamline your workforce management from one place. 
          </p>

          <Link to="/addEmp" className="btn btn-primary btn-lg me-3"> Add Employee </Link>
          <Link to="/help" className="btn btn-outline-secondary btn-lg"> Get Help </Link> 
      </div> 
    </div>

    <h2 className="mb-4">What You Can Do</h2>

    <div className="row g-4"> 
      <div className="col-md-4"> 
        <div className="card h-100 shadow-sm"> 
          <div className="card-body"> 
            <h5 className="card-title">Employee Records</h5> 
            <p className="card-text text-secondary"> Maintain employee information in an organized and accessible way. </p> 
            <Link to="/addEmp" className="btn btn-outline-primary"> Add Employee </Link> 
          </div> 
        </div> 
      </div>

      <div className="col-md-4"> 
        <div className="card h-100 shadow-sm"> 
          <div className="card-body"> 
            <h5 className="card-title">Update Information</h5> 
            <p className="card-text text-secondary"> Keep employee details accurate and up to date. </p> 
            <Link to="/updateEmp" className="btn btn-outline-primary"> Update Details </Link> 
          </div> 
        </div> 
      </div>

      <div className="col-md-4"> 
        <div className="card h-100 shadow-sm"> 
          <div className="card-body"> 
            <h5 className="card-title">About Our System</h5> 
            <p className="card-text text-secondary"> Learn more about the system and how it helps simplify employee management. </p> 
            <Link to="/about" className="btn btn-outline-primary"> Learn More </Link> 
          </div> 
        </div> 
      </div> 
    </div> 
  </div> 
  ); 
}