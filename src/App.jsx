import './App.css'
import Home from "./pages/Home.jsx"
import Destinations from "./pages/Destinations.jsx"
import Blog from "./pages/Blog.jsx"
import Contact from "./pages/Contact.jsx"
import Weather from "./pages/Weather.jsx"

import { Route, Routes } from "react-router-dom"
import Navbar from './components/Navbar.jsx'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import useThemeToggle from "./theme.js"
function App() {
  const { theme } = useThemeToggle();

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </div>
  )
}
export default App