import './Login.css'
import { useNavigate } from "react-router-dom";
import { loginUser } from '../services/authentication'
import { useState ,useContext} from 'react'
import { myContext } from '../../../context/MyContext';

export default function Login() {
  
  const {user, setUser} = useContext(myContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleLogin = async(email,password) => {
    try {
          const res = await loginUser(email, password);
          setUser(res);
          if (res) {navigate("/home")};
    } catch (error) {
      console.log(error);
    }

  } 
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card shadow-sm border-dark mt-5" id= "login_card">
              <div className="m-5">
                <h4 className="text-center">Log In</h4>
                <form onSubmit={(e) => {e.preventDefault(); handleLogin(email, password)}}>

                  <label htmlFor="login_email" className="form-label">Email</label>
                  <input type="email" 
                  className="form-control" 
                  id="login_email" 
                  value={email} 
                  required 
                  placeholder="Enter the email"
                  onChange={(e)=> setEmail(e.target.value)}/>

                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" 
                  className="form-control" 
                  id="password" 
                  value={password} 
                  required 
                  placeholder="Enter the password"
                  onChange={(e)=> setPassword(e.target.value)}/>

                  <button className="btn btn-primary m-0 mt-3" type="submit">Log In</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
