import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "@dnb/eufemia/style";

import App from "./ignore/App";
import Footer from "./ignore/Footer";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
