import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "@dnb/eufemia/style";

import App from "./components/App";
import { Anchor, Logo, P, Section } from "@dnb/eufemia";

ReactDOM.render(
  <StrictMode>
    <App />
    <Section spacing="large" style_type="sea-green">
      <P space={0}>DNB</P>
    </Section>
  </StrictMode>,
  document.getElementById("root")
);
  
  {/*  <P space={0}>
     
   </P> */}
  {/* Visual DNB Section: <Anchor href="#">sea-green</Anchor> */}
/* 
<span
  style={{
    fontSize: "4rem",
  }}
>
<Logo size="inherit" brand="sbanken"  />
</span>
*/