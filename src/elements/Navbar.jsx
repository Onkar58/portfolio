import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi'
import {FaXmark} from 'react-icons/fa6'

const list1 = [
  {
    name: "Home",
    link: "home"
  },
  {
    name: "Projects",
    link: "projects"
  },
  {
    name: "Skills",
    link: "skills"
  },

]

const list2 = [
  {
    name: "LinkedIn",
    redirect: "https://www.linkedin.com/in/onkar58/"
  },
  {
    name: "GitHub",
    redirect: "https://www.github.com/onkar58/"
  },
  {
    name: "Twitter",
    redirect: "https://www.twitter.com/_Onkar58/"
  },
  {
    name: "Instagram",
    redirect: "https://www.instagram.com/onkar.58/"
  }
]

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    element.scrollIntoView({ behavior: "smooth" })
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div
      className={`h-[100vh] w-[90%] ${isMenuOpen ? "left-0" : "-left-[89%]"} transition-all duration-300 absolute z-10 md:static md:w-[10vw] bg-background-light text-text-color 
      dark:bg-dark-background-light dark:text-dark-text-color`}
    >
      <div className='navigation flex flex-col'>
        <ul className='list-none w-full h-[40vh] flex flex-col items-center justify-around'>
          {list1.map((item, idx) => (
            <li
              key={idx}
              className='cursor-pointer'
              onClick={() => {scrollToSection(item.link); setIsMenuOpen(false)}}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className='socials'>
        <ul className='list-none w-full h-[50vh] flex flex-col items-center justify-around'>
          {list2.map((item, idx) => (
            <li key={idx} className='cursor-pointer' onClick={() => window.open(item.redirect, "_blank")}>{item.name}</li>
          ))}
          <button
            className='mx-auto h-[40px] w-[80px] px-[2px] py-[3px] rounded-[10px] flex justify-start 
            shadow-sm border-2 border-text-color bg-[#fff]
            dark:justify-end dark:bg-dark-background-light dark:border-dark-text-color'
            onClick={() => setDarkTheme(!darkTheme)}
          >
            <div className="h-full  aspect-square bg-text-color rounded-[10px] dark:bg-dark-text-color"></div>
          </button>
        </ul>
      </div> 
      <div 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`absolute top-[45%] left-full scale-[250%] bg-background-light dark:bg-dark-background-light p-1 rounded-r-[5px] md:hidden`}>
      {!isMenuOpen && <HiMenu />}
      {isMenuOpen && <FaXmark />}
      </div>
    </div>
  )
}

export default Navbar