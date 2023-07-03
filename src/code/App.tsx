import React from "react";
import { H2, Section, Tabs } from "@dnb/eufemia";
import Welcome from "./Welcome";
import CustomerPage from "./Customer/Profile/CustomerPage";
import { TransactionsPage } from "../ignore/codeDump";

export default function App() {
  return (
    <Tabs
      tabs_spacing
      tabs_style="mint-green"
      content_style="black-3"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Tabs.Content title="Velkommen">
        <Welcome />
      </Tabs.Content>
      <Tabs.Content title="Logg inn som kunde">
        <CustomerPage />
      </Tabs.Content>
      <Tabs.Content title="Logg inn som etterforsker">
        <Section spacing top bottom style_type="white">
          <H2 top={0} bottom>
            <TransactionsPage />
          </H2>
        </Section>
      </Tabs.Content>
    </Tabs>
  );
}
