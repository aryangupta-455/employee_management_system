import { db } from "../../../config/firebase"
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

// Get the collection reference from DB...
const employeeCollectionRef = collection(db, "employees")

// Get all the employees
const getEmployees = () => {
    const employeeList = getDocs(employeeCollectionRef)
    return employeeList;
}

// this method is used to get single employee
const getEmployee = (id) => {
  const employeeDoc = doc(db, "employees", id)
  return employee;
}

//add an employee
const addEmployee = (newEmp) =>{
  return addDoc(employeeCollectionRef, newEmp);
}

//update an employee
const updateEmployee = async (id, employeeUpdates) => {
  try {
      const employeeDoc = doc(db, "employees", id)
      await updateDoc(employeeDoc, employeeUpdates)
  } catch (error) {
    console.log("Error updating employee: ", error);
  }
}

//delete an employee
const deleteEmployee = (id) => {
  const employeeDoc =  doc(db, 'employees', id)
  return deleteDoc(employeeDoc);
}

const CRUD_OP = { 
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee

}

export default CRUD_OP;




// export default async function Services() {
//     const response = await getDocs(collection(db, 'employees'));
//     const employees = response.docs.map((doc) => ({id: doc.id, ...doc.data()}))      
//   return employees
// }
