
import { useState } from "react";
import Contents from "./elements/Contents";
import Navbar from "./elements/Navbar";

function App() {
  const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div
      className={`${darkTheme ? "dark" : ""} flex`}
    >
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Contents darkTheme={darkTheme}/>
    </div>
  );
}

export default App;
