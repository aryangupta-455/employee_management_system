import './App.css'
import Navbar from './components/navbar/Navbar'
import RoutPath from './routes/RoutPath'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
    <Navbar />
    <main className='page-content'>
      <RoutPath />
    </main>
    <Footer />
    </>
  )
}

export default App
