import './Help.css';

export default function Help() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="text-center mb-4">Help & Support</h3>
              
              <div className="mb-4">
                <h5 className="text-dark fw-bold">How do I add a new employee?</h5>
                <p className="text-muted">
                  Navigate to the Add Employee form, fill out all the required fields completely, and click the submit button.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-dark fw-bold">Why am I seeing an error message?</h5>
                <p className="text-muted">
                  The form requires every field to be filled out. If any input is left blank, a warning alert will appear at the top.
                </p>
              </div>

              <div>
                <h5 className="text-dark fw-bold">Need further assistance?</h5>
                <p className="text-muted mb-0">
                  If you encounter technical issues or bugs, please reach out to your system administrator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}