import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard.jsx'
import Home from './pages/Home'
import{Routes ,Route} from 'react-router-dom'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute.jsx'


function App() {
  const[isLoggedIn ,setIsLoggedIn] = useState(false);

  return (
   <div className='w-screen h-full bg-gray-900  flex flex-col'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}   />
        <Route path="Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}   />
        <Route path="Dashboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Dashboard />
        </PrivateRoute>
          
          }   />  
      </Routes>
    
   </div>
  )
}

export default App
