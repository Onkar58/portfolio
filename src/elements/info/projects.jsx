import animhub from "../assests/images/Animhub.png";
import profileApp from "../assests/images/profile_app.jpg";
import predators from "../assests/images/predators.png";
import gdsc from "../assests/images/gdsc_logo.png";

let projects = [
    {
        title: "AnimHub",
        description: "A online code editor website that allows users to create animations using HTML, CSS, and JavaScript.",
        link: "https://animhub.dev/",
        code: "https://github.com/Pixel-Perfect-Tales/AnimHub",
        stack: "MERN + Firebase",
        img: animhub,
    },
    {
        title: "Profile App",
        description: "A website where you can login/signup and create your profile. Uses MERN stack, JWT tokens for authorization, and MongoDB for data storage",
        link: "https://profile-app-onkar58.vercel.app/",
        code: "https://github.com/Onkar58/profileApp",
        stack: "MERN",
        img: profileApp,
    },
    {
        title: "Predators Racing",
        description: "Official Website of the Team Predators of the DYPCOE Uses React, Firebase, and Three JS",
        link: "https://team-predators-racing.web.app/",
        code: "https://github.com/Onkar58/Team_Predators",
        stack: "React + Firebase + Three JS",
        img: predators,
    },
    {
        title: "GDSC Website",
        description: "Official Website of the GDSC DYPCOE club made using React and Firebase",
        link: "https://dscdypcoe.web.app/",
        code: "https://github.com/DSC-DYPCOE/GDSC_Web_Frontend",
        stack: "React + Firebase",
        img: gdsc,
    },

]

export default projects;
