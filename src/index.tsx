import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "@dnb/eufemia/style";

import App from "./components/App";
import Footer from "./components/Footer";

ReactDOM.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
  document.getElementById("root")
);