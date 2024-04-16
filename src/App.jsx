import { BrowserRouter } from "react-router-dom"

import About from "./sections/about"
import Contact from "./sections/contact"
import Experience from "./sections/experience"
import Feedback from "./sections/feedback"
import Hero from "./sections/hero"
import Navbar from "./sections/navbar"
import Tech from "./sections/tech"
import Works from "./sections/works"

import { StarsCanvas } from "./components/three"

const App = () => {
   return (
      <BrowserRouter>
         <div className="relative z-0 bg-primary">
            <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
               <Navbar />
               <Hero />
            </div>

            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedback />

            <div className="relative z-0">
               <Contact />
               <StarsCanvas />
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
