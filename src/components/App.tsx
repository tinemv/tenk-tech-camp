import React from "react";
import Customer from "./Customer";
import Transactions from "./Transactions";
import { H2, Section, Tabs } from "@dnb/eufemia";
import Oppgave3 from "./Oppgave3";

export default function App() {
  return (
    <Tabs
      tabs_spacing
      tabs_style="mint-green"
      content_style="black-3"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Tabs.Content title="Kunde">
        <Customer />
      </Tabs.Content>
      <Tabs.Content title="Transaksjoner">
        <Section spacing top bottom style_type="white">
          <H2 top={0} bottom>
            <Transactions />
          </H2>
        </Section>
      </Tabs.Content>
      <Tabs.Content title="Oppgave 3">
        <Oppgave3/>
      </Tabs.Content>
    </Tabs>
  );
}
