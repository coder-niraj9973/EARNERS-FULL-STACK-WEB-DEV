import { useState } from 'react'
import './App.css'
import { Routes, Route, Outlet, Link, useParams } from 'react-router-dom'
import NotFoundPage from './components/NotFoundPage'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function Home() {
  return (
    <h1>
      Home
    </h1>
  )
}

function ProductPage() {
  const params = useParams()
  console.log(params);
  return (
    <h1>
      Product Page
    </h1>
  )
}

function AboutUs() {
  return (
    <h1>
      About Us
    </h1>
  )
}

function Navbar() {

  return (
    <>
      <ul>
        <Link to ={"/"} >Home</Link> <br />
        <Link to ={"/product-page"}>Product Page</Link> <br />
        <Link to ={"/about-us"}>About Us</Link> <br />
        <Link to ={"/login"}>Login</Link> <br />
      </ul>
      <Outlet />
    </>
  )
}

// {/* <ul>
//         <li onClick={() => setPage("home")}>Home</li>
//         <li onClick={() => setPage("productPage")}>Product Page</li>
//         <li onClick={() => setPage("aboutUs")}>About Us</li>
//       </ul>

//       {page == "home" && <Home />}
//       {page == "productPage" && <ProductPage />}
//       {page == "aboutUs" && <AboutUs />} */}

function App() {

  const [page, setPage] = useState("home")

  return (
    <Routes>

      <Route path='/' element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='/product-page/:id/:title' element={<ProductPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Route>
      
        <Route path='/contact-us' element={<h1>Contact Us Page</h1>} />
        <Route path='/login' element={<Login/>} />
      <Route path='*' element={<NotFoundPage/>} />

    </Routes>
  )
}

export default App
