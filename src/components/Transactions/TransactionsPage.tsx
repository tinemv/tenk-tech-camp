import React from "react";
import { Tabs } from "@dnb/eufemia";
import "../../styles.css";
import Transactions from "./Transactions";

export default function TransactionsPage() {
  return (
    <Tabs>
      <Tabs.Content title="Dashboard">Et dashboard</Tabs.Content>
      <Tabs.Content title="Transaksjoner">
        <div className="TransactionsTab">
          <Transactions />
        </div>
      </Tabs.Content>
    </Tabs>
  );
}
