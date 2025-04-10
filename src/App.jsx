import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Book from './pages/Book'
import { ToastContainer } from 'react-toastify';
import Gallery from './pages/Gallery'
import Treatments_clinic from './pages/Treatments_clinic'


function App() {
  // AOS.init()
  return (
    <>


    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/appointment' element={<Book/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/treatments-clinic' element={<Treatments_clinic/>}/>
    </Routes>


    <Footer/>
    
    </>
  )
}

export default App
