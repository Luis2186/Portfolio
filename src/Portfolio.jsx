import { useState } from "react";
import Blog from "./Components/Blog";
import Home from "./Components/Home";

function Portfolio() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <Blog /> */}
    </>
  );
}

export default Portfolio;
