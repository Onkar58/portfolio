import React from 'react'
import styles from './About.module.css'
import illustration from '../assests/images/aboutImg.png'

const About = () => {
    const hii = () => {
        var name = prompt("Enter Your name: ");
        if (name) {
            alert("Hello " + name);
        }

    }
    return (
        <>
            <h1 className={styles.heading} id="about">About Me</h1>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1> I am <span>Onkar Waghmode</span></h1>
                    <h3>A 2nd Year Engineering Student  interested in Web Development, creating logos, designs and also in Android Development</h3>
                    <button className={styles.hiBtn} onClick={hii}>Say Hi to Me</button>
                </div>
                <div className={styles.imgDiv}>
                    <img src={illustration} alt="img" />
                </div>
            </div>
        </>
    )
}

export default About;