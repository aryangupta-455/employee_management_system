import './App.css'
import Navbar from './components/navbar/Navbar'
import RoutPath from './routes/RoutPath'
import Footer from './components/footer/Footer'
import ShowEmp from './components/showEmp/ShowEmp'
import MyContext from '../context/MyContext'
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  return (
    <>
      <MyContext>
        <Navbar />
          <main className='page-content'>
            <RoutPath />
          </main>
        {location.pathname !== "/showEmp" && <Footer />}
      </MyContext>
    </>
  )
}

export default App
