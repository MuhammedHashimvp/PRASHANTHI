import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import 'aos/dist/aos.css'
import AOS from 'aos'

function App() {
  AOS.init()
  return (
    <>
    <Header/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
