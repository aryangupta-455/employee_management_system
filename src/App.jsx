import './App.css'
import Navbar from './components/navbar/Navbar'
import RoutPath from './routes/RoutPath'
import Footer from './components/footer/Footer'
import ShowEmp from './components/showEmp/ShowEmp'
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
    <Navbar />
    <main className='page-content'>
      <RoutPath />
    </main>
    {location.pathname !== "/showEmp" && <Footer />}


    </>
  )
}

export default App
