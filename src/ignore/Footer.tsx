import React from "react";
import { Logo, Section, Span } from "@dnb/eufemia";

export default function Footer() {
  return (
    <Section
      spacing="small"
      style_type="sea-green"
      style={{
        position: "fixed",
        bottom: 0,
        marginRight: "auto",
        marginLeft: "auto",
        left: "0px",
        right: "0px",
        textAlign: "center",
      }}
    >
      <Span
        style={{
          fontSize: "2rem",
        }}
      >
        <Logo size="auto" color="white" />
      </Span>
    </Section>
  );
}
