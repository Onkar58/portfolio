import React, { useState } from 'react'
import styles from './About.module.css'
import illustration from '../assests/images/aboutImg.png'
import CustomPromptBox from './PromptBox'

const About = () => {
    const [promt, setPromt] = useState(false)
    return (
        <>
            <h1 className={styles.heading} id="about">About Me</h1>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1> I am <span>Onkar Waghmode</span></h1>
                    <h3>A 2nd Year Engineering Student  interested in Web Development, creating logos, designs and also in Android Development</h3>
                    <button className={styles.hiBtn} onClick={() => setPromt(!promt)}>Say Hi to Me</button>
                </div>
                <div className={styles.imgDiv}>
                    <img src={illustration} alt="img" />
                </div>
            </div>

            {
                promt && <CustomPromptBox />
            }

        </>
    )
}

export default About;