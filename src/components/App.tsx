import React from "react";
import Customer from "./Customer";
import Transactions from "./Transactions";
import { Tabs } from "@dnb/eufemia";

export default function App() {
  return (
    <Tabs
      tabs_spacing
      tabs_style="mint-green"
      content_style="black-3"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Tabs.Content title="Logg inn som kunde">
        <Customer />
      </Tabs.Content>
      <Tabs.Content title="Logg in som etterforsker">
        <Transactions />
      </Tabs.Content>
    </Tabs>
  );
}
