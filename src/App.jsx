import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Mywork from './Components/MyProjects/Myproject'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Mywork/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App