import {useState, useEffect} from'react'
import Services from '../services/Services'
import './showEmp.css';

export default function ShowEmp() {

  const[employee, setEmployee] = useState([]);

  useEffect (() => {
        async function fetchEmployees(){
          const data = await Services();
          setEmployee(data);
        }fetchEmployees();
    },[]) 

  return (
    <div>
      <div className='showEmp my-5'>
        <h2 className='my-1 border border-dark rounded'>Employees List</h2>
        <div className="table-container">
          <table className='emp-table rounded'>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Employee Type</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employee.map((emp, idx) => (
                <tr key={emp.id}>
                  <td>{idx + 1}</td>
                  <td> {emp.name}</td>
                  <td> {emp.age}</td>
                  <td> {emp.gender}</td>
                  <td> {emp.email}</td>
                  <td> {emp.emptype}</td>
                  <td> {emp.department}</td>
                  <td> {emp.salary}</td>
                  <td> {emp.address}</td>
                  <div>
                    <button className='btn btn-warning me-1' type='button'>Update</button>
                    <button className='btn btn-danger' type='button' onClick={handleDelete()}>Delete</button> 
                  </div>
                </tr>))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
