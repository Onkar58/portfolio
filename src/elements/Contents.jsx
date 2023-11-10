import React from 'react'
import Banner from './Banner'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Contents = ({darkTheme}) => {
  return (
    <div
      className='w-full overflow-y-auto h-[100vh] pb-10
                bg-background text-text-color 
                dark:bg-dark-background dark:text-dark-text-color'
    >
      <Banner darkTheme={darkTheme}/>
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
    </div>
  )
}

export default Contents