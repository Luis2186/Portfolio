import { useState } from "react";
import { PortafolioRouter } from "./router/PortafolioRouter";

function Portfolio() {
  return (
    <>
      <div className="layout">
        <PortafolioRouter />
      </div>
    </>
  );
}

export default Portfolio;
