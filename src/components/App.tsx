import React from "react";
import CustomerPage from "./Customer/CustomerPage";
import TransactionsPage from "./Transactions/TransactionsPage";
import { Tabs } from "@dnb/eufemia";

export default function App() {
  return (
    <Tabs
      tabs_spacing
      tabs_style="mint-green"
      content_style="black-3"
      style={{ marginLeft: "1rem", marginRight: "1rem" }}
    >
      <Tabs.Content title="Privatkunde">
        <CustomerPage />
      </Tabs.Content>
      <Tabs.Content title="DNB">
        <TransactionsPage />
      </Tabs.Content>
    </Tabs>
  );
}
