import React from 'react'
import styles from './navbar.module.css'
// import {NavLink} from 'react-router-dom'
import navbarInfo from '../info/navbarInfo'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { RxCross2 } from 'react-icons/rx'



function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Onkar58</h1>
        </div>
        <ul className={isMenuOpen ? styles.openMenu : ""}>
          {navbarInfo.map((currentValue, index) =>
            <li key={index}>
              <a href={currentValue.url} onClick={() => setIsMenuOpen(false)}>
                {currentValue.title}
              </a>
            </li>
          )}
        </ul>

        <div className={styles.icons} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen && <CiMenuFries />}
          {isMenuOpen && <RxCross2 />}
        </div>
      </nav>
    </>
  )
}

export default Navbar