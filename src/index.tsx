import Provider from "@dnb/eufemia/shared/Provider";
import "@dnb/eufemia/style";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import application_goal_img from "./ignore/Application_Goal.png";
import application_result_goal_img from "./ignore/Application_Result_Goal.png";
import card_overview_goal_img from "./ignore/CardOverview_Goal.png";

import App from "./code/App";
import { ImagePage } from "./ignore/ImagePage";

ReactDOM.render(
  <Provider locale="en-GB">
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/reference_image_application"
            element={<ImagePage url_img={application_goal_img} />}
          />
          <Route
            path="/reference_image_application_result"
            element={<ImagePage url_img={application_result_goal_img} />}
          />
          <Route
            path="/reference_image_card_overview"
            element={<ImagePage url_img={card_overview_goal_img} />}
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById("root")
);
