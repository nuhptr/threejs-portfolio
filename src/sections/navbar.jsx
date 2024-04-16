import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { navLinks } from "../constant"
import { iconLogo, iconMenu, iconClose } from "../assets"

const Navbar = () => {
   const [active, setActive] = useState("")
   const [toggle, setToggle] = useState(false)
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      function handleScroll() {
         const scrollTop = window.scrollY
         if (scrollTop > 100) setScrolled(true)
         else setScrolled(false)
      }

      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   function handleScrollTop() {
      setActive("")
      window.scrollTo(0, 0)
   }

   return (
      <nav
         className={`fixed top-0 z-20 flex items-center w-full py-5 padding-x bg-primary  
         ${scrolled ? "bg-primary" : "bg-transparent"}`}>
         <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
            <Link to="/" className="flex items-center gap-2" onClick={handleScrollTop}>
               <img src={iconLogo} alt="logo" className="object-contain w-9 h-9" />
               <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                  Adi &nbsp; <span className="hidden sm:block"> | JavaScript</span>
               </p>
            </Link>

            {/* Desktop Menu */}
            <ul className="flex-row hidden gap-10 list-none sm:flex">
               {navLinks.map((nav) => (
                  <li
                     key={nav.id}
                     className={`${active === nav.title ? "text-white" : "text-secondary"} 
                     hover:text-white text-[18px] font-medium cursor-pointer`}
                     onClick={() => setActive(nav.title)}>
                     <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
               ))}
            </ul>

            {/* Mobile Menu */}
            <div className="flex items-center justify-end flex-1 sm:hidden">
               <img
                  src={toggle ? iconClose : iconMenu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)}
               />

               <div
                  className={`${!toggle ? "hidden" : "flex"} 
                  p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                  <ul className="flex flex-col items-start justify-end flex-1 gap-4 list-none">
                     {navLinks.map((nav) => (
                        <li
                           key={nav.id}
                           className={`font-poppins font-medium cursor-pointer text-[16px] 
                           ${active === nav.title ? "text-white" : "text-secondary"}`}
                           onClick={() => {
                              setToggle(!toggle)
                              setActive(nav.title)
                           }}>
                           <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
