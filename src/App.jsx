import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import BookingForm from './Components/Booking/Booking'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/booking" element={<BookingForm/>} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
