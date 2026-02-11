import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import BookingForm from './Components/Booking/Booking'
import Register from './Components/Signup/SignUp'
import Login from './Components/Login/Login'
import PrivateRoutes from './Utils/PrivateRoutes'
import { AuthProvider } from './Utils/AuthContext'
import UDashboard from './Components/UserDashBoard/UDashboard'
import './App.css'
import AdminDash from './Components/AdminDash/AdminDash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <AuthProvider>
      <Header/>
      <Routes>
         <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        <Route element={<PrivateRoutes/>}>
          <Route path="/about" element={<About/>} />
          <Route path="/booking" element={<BookingForm/>} />
          <Route path='/uDashboard' element={<UDashboard/>} />
          <Route path='/adminDashboard' element={<AdminDash/>} />
        </Route>
        {/* Add more routes as needed */}
      </Routes>
      </AuthProvider>
      <Footer/>
    </Router>
  )
}

export default App
