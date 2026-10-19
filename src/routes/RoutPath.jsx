import { Routes, Route } from "react-router-dom";
import Home from '../components/home/Home';
import About from '../components/about/About';
import Login from '../components/login/Login';
import AddEmp from '../components/addEmp/AddEmp';
import ShowEmp from "../components/showEmp/ShowEmp";
import UpdateEmp from '../components/updateEmp/UpdateEmp'
import Help from '../components/help/Help';          
import Register from '../components/register/Register';
import Footer from "../components/footer/Footer";
import ProtectedRoute from "../components/protectedroute/ProtectedRoute";

export default function RoutPath() {
  return (
    <div>
        <Routes>
            <Route path = "/" element = {<Register />}/>
            <Route path = "/login" element = {<Login />}/>
            <Route path = "/about" element = {<About />}/>
            <Route path = "/help" element = {<Help/>}/>
            <Route path = "/register" element = {<Register />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/showEmp" element={<ProtectedRoute><ShowEmp /></ProtectedRoute>} />
            <Route path="/addEmp" element={<ProtectedRoute><AddEmp /></ProtectedRoute>} />
            <Route path="/updateEmp" element={<ProtectedRoute><UpdateEmp /></ProtectedRoute>} />
            <Route path = "/footer" element = {<Footer />}/>
        </Routes>
    </div>
  )
}

{/* <Route path = "/showEmp" element = {<ShowEmp />}/> */}
{/* <Route path = "/home" element = {<Home />}/> */}
{/* <Route path = "/addEmp" element = {<AddEmp />}/> */}
{/* <Route path = "/updateEmp" element = {<UpdateEmp />}/> */}