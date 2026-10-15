import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">

        <div className="row g-4">

          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-3">
              Employee<span className="text-primary">MS</span>
            </h4>

            <p className="text-secondary">
              A simple and efficient way to manage employee records,
              update information, and keep your workforce organized
              in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold mb-3">Quick Links</h6>

            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/addEmp" className="footer-link">
                  Add Employee
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/updateEmp" className="footer-link">
                  Update Details
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Our Features</h6>

            <ul className="list-unstyled text-secondary">
              <li className="mb-2">Employee Records Management</li>
              <li className="mb-2">Employee Information Updates</li>
              <li className="mb-2">Organized Employee Data</li>
              <li className="mb-2">Simple User Interface</li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold mb-3">Need Help?</h6>

            <p className="text-secondary">
              Have questions about using the system? Visit our help
              section to learn more.
            </p>

            <Link to="/help" className="btn btn-outline-light btn-sm">
              Get Help
            </Link>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* Bottom Section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

          <p className="text-secondary small mb-0">
            &copy; {new Date().getFullYear()} Employee Management System.
            All rights reserved.
          </p>

          <p className="text-secondary small mb-0">
            Designed for simple and efficient workforce management.
          </p>

        </div>

      </div>
    </footer>
  );
}