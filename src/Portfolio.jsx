import { useState } from "react";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Hobbies from "./Components/Hobbies/Hobbies";
import usuario from "./Data/dataUsuario";

function Portfolio() {
  const [layoutVisible, setLayoutVisible] = useState(false);

  return (
    <>
      <div className="layout">
        {/* <Home user={usuario} layoutVisible={layoutVisible} /> */}
        {/* <AboutMe user={usuario} layoutVisible={layoutVisible} /> */}
        <Hobbies layoutVisible={layoutVisible} user={usuario} />
      </div>
      {/* <Blog /> */}
    </>
  );
}

export default Portfolio;
