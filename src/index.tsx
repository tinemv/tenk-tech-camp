import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "@dnb/eufemia/style";

import App from "./components/App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
