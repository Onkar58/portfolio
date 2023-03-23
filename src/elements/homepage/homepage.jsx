import React from 'react'
import styles from './homepage.module.css'
import MainLockupInfo from '../info/mainLockUp.jsx'

// import image1 from '../assests/images/react.png'

const Homepage = () => {
    return (
        <>
            <div id='home' className={styles.emptyContainer}></div>
            <div className={styles.container}>
                <div className={styles.images}>
                    {MainLockupInfo.map((currentValue) => <div className={styles.box} data-hover={currentValue.name}><img src={currentValue.url} alt={currentValue.name} /></div>)}
                </div>
                <div className={styles.mainlockUp}>
                    <div className={styles.heading}>HOLA !<img src={require('../assests/images/hi.png')} alt="" className={styles.hi} />
                    </div>
                    <div className={styles.subheading}>
                        <h1>I am <span>Onkar Waghmode</span></h1><br />
                        <span>a Web Developer</span><br />
                        <span>a Designer</span><br />
                        <span>a Creator</span>
                    </div>
                    <div className={styles.mainCTA}>
                        <a href="#about"><button className={styles.mainbtn}>About Me</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage