import React from "react";
import { AllTransactionsView } from "./AllTransactionsView";
import { H1, P, Section, Tabs } from "@dnb/eufemia";

export default function Transactions() {
  return (
    <Tabs>
      <Tabs.Content title="Dashboard">Et dashboard</Tabs.Content>
      <Tabs.Content title="Transaksjoner">
        <div className="TransactionsTab">
          <H1>Oversikt over alle transaksjoner i DNB</H1>
          <AllTransactionsView />
        </div>
      </Tabs.Content>
    </Tabs>
  );
}
