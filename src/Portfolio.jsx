import { useState } from "react";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe/AboutMe";

function Portfolio() {
  const [layoutVisible, setLayoutVisible] = useState(false);

  return (
    <>
      <div className="layout">
        {/* <Home layoutVisible={layoutVisible} /> */}
        <AboutMe layoutVisible={layoutVisible} />
      </div>
      {/* <Blog /> */}
    </>
  );
}

export default Portfolio;
