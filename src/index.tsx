import Provider from "@dnb/eufemia/shared/Provider";
import "@dnb/eufemia/style";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./ignore/App";

ReactDOM.render(
  <Provider locale="en-GB">
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
