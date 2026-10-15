import './addEmp.css'
import { useState } from 'react';
export default function AddEmp() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [emptype, setEmpType] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!name || !age || !gender || !department || !emptype || !contact || !email || !salary || !address){
      setError(true);
    }
    else{
      setError(false);
    }
  }

  return (
    <div>
      <div className="container py-5 ">
        <div className="row justify-content-center">
              {error && (
                <div className="card bg-danger text-white p-2 text-center">
                  <p className='mb-0'>Please fill all the fields...</p>
                </div>)}
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
                
                <div className="card-body p-4">
                    <h3 className="text-center mb-4">Add Employee</h3>
                    <form onSubmit={handleSubmit} action="">
                      <label htmlFor="name" className="form-label my-1 ">Name</label>
                      <input type="text" 
                             className="form-control border-dark" 
                             id = "name" 
                             placeholder="Enter your name" 
                             value={name} 
                             onChange={(e) => setName(e.target.value)}/>

                      <label htmlFor="age" className="form-label my-1 ">Age</label>
                      <input type="text" 
                      className="form-control border-dark" 
                      id = "age" 
                      placeholder="Enter your age" 
                      value={age} 
                      onChange={(e) => setAge(e.target.value)}/>

                      <label htmlFor="gender" className="form-label my-1 ">Gender</label>
                      <input type="text" 
                      className="form-control border-dark" 
                      id = "gender" 
                      placeholder="Enter your gender" 
                      value={gender} 
                      onChange={(e) => setGender(e.target.value)}/>

                      <label htmlFor="department" className="form-label my-1 ">Department</label>
                      <input type="text" 
                             className="form-control border-dark" 
                             id = "department" 
                             placeholder="Enter your department" 
                             value={department} 
                             onChange={(e) => setDepartment(e.target.value)}/>

                      <label htmlFor="employeetype" className="form-label my-1 ">Employee-Type</label>
                      <input type="text" 
                              className="form-control border-dark" 
                              id = "employeetype" 
                              placeholder="Ex:- Intern,Full Time, Contract..." 
                              value={emptype} 
                              onChange={(e) => setEmpType(e.target.value)}/>

                      <label htmlFor="mobileno" className="form-label my-1 ">Contact</label>
                      <input type="number" 
                              className="form-control border-dark" 
                              id = "mobileno" 
                              placeholder="Enter your phone" 
                              value={contact}
                              onChange={(e) => setContact(e.target.value)}/>

                      <label htmlFor="emailaddress" className="form-label my-1 ">Email address </label>
                      <input type="email" 
                              className="form-control border-dark" 
                              id = "emailaddress" 
                              placeholder="example@gmail.com" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}/>

                      <label htmlFor="salary" className="form-label my-1 ">Salary</label>
                      <input type="number" 
                              className="form-control border-dark" 
                              id = "salary" 
                              placeholder="Enter your salary" 
                              value={salary} 
                              onChange={(e) => setSalary(e.target.value)}/>

                      <label htmlFor="address" className="form-label my-1 ">Address</label>
                      <input type="text" 
                              className="form-control border-dark" 
                              id = "address" 
                              placeholder="Enter your address" v
                              alue={address} 
                              onChange={(e) => setAddress(e.target.value)}/>

                      <button className="btn btn-primary p-2 my-3" type='submit' >Add Employee</button>
                    </form>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
