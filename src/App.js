import About from "./elements/homepage/about";
import Contact from "./elements/homepage/Contact";
import Homepage from "./elements/homepage/homepage";
import Projects from "./elements/homepage/projects";
import Navbar from "./elements/navbar/navbar"
// import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Homepage />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

export default App;
