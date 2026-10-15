import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
import About from '../components/about/About';
import Login from '../components/login/Login';
import AddEmp from '../components/addEmp/AddEmp';
import UpdateEmp from '../components/updateEmp/UpdateEmp'
import Help from '../components/help/Help';          
import Register from '../components/register/Register';
export default function RoutPath() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/about" element = {<About />}/>
            <Route path = "/help" element = {<Help/>}/>
            <Route path = "/register" element = {<Register />}/>
            <Route path = "/addEmp" element = {<AddEmp />}/>
            <Route path = "/updateEmp" element = {<UpdateEmp />}/>
        </Routes>
    </div>
  )
}


