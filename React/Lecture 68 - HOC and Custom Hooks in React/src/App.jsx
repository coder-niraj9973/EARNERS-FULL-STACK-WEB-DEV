import './App.css'
import { AuthDashboard } from './components/Dashboard'
import withAuth from './utils/withAuth'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { AuthProfile } from './components/Profile'

function App() {

  let user = {
    name : "Niraj",
    role : "Developer"
  }

  return (
    <>
      {/* <Dashboard/> */}

      <Navbar />

      <Routes>
        <Route path='/' element={<p>Home</p>} ></Route>
        <Route path='/dashboard' element={<AuthDashboard />} ></Route>
        <Route path='/profile' element={<AuthProfile {...user} />} ></Route>
      </Routes>

    </>
  )
}

export default App
