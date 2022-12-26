import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Courses from './pages/Courses'
import Header from './components/Header'

export default function App() {
  return (
   <>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/sign-in' element={<SignIn />}/>
                <Route path='/sign-up' element={<SignUp />}/>
                <Route path='/forgot-password' element={<ForgotPassword />}/>
                <Route path='/courses' element={<Courses />}/>
            </Routes>
        </Router>
   </>
  )
}
