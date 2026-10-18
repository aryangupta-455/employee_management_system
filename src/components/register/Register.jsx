import './Register.css'
import { useState } from 'react'
import { registerUser } from '../services/authentication'
import { useNavigate, Link } from 'react-router-dom'


export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit = async(e) => { 
    e.preventDefault();

    try {
     const result = await registerUser(email, password);
     console.log(result)
     navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
        <div className='container row justify-content-center'>
          <div className='col-12 col-md-6'>
            <h2 className='text-center fw-bold mt-5'>Welcome to Employee<span className='text-primary'>MS</span></h2>
            <div className ="card shadow-sm rounded p-3" id= "register_card">
              <form action="" onSubmit={handleSubmit}>

                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" 
                className="form-control" 
                id="email" 
                value={email} 
                placeholder="Enter the email" 
                required 
                onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" 
                className="form-control" 
                id="password" 
                value={password} 
                placeholder="Enter the password" 
                required minLength ={6} 
                onChange={(e) => setPassword(e.target.value)}/>

                <button className="btn btn-primary m-0 mt-3" type="submit">Register</button>
                <p className='text-center'>Already a member? <Link to="/login">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
