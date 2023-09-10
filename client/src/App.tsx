import "./index.scss";
import { Route, Routes } from 'react-router-dom'
import Register from './components/register_login/Register'
import NavBar from './components/navBar/NavBar'
import { navBarMain } from './components/navBar/Routes'
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
import Login from "./components/register_login/Login";


function App() {
 

 return (
    <>
     <div className="main">
      <NavBar navbar={navBarMain} />
      <Routes>
        <Route path='/' element={<Register />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/contacts' element={<Contacts />}/> 
        <Route path='/about' element={<About />}/> 
      </Routes>
      <Footer />
      </div>
     
    </>
  )
}

export default App
