import React from "react"
import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

export default function App() {
   return (
      <BrowserRouter>
         <div className="relative z-0 bg-primary">
            <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
               <Navbar />
               <Hero />
            </div>
         </div>
      </BrowserRouter>
   )
}
