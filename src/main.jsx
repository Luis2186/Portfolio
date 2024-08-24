import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio.jsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { FormPortfolio } from "./CreatePortfolio/pages/FormPortfolio.jsx";
import { Index } from "./Home/pages/Index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      {/* <Portfolio /> */}
      {/* <FormPortfolio /> */}
        <Index />
    </BrowserRouter>
  </Provider>
  //   {/* </React.StrictMode> */}
);
