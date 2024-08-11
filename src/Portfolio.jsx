import { useState } from "react";
import { PortafolioRouter } from "./router/PortafolioRouter";
import { FormPortfolio } from "./CreatePortfolio/pages/FormPortfolio";

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
