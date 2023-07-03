import React from "react";
import { allDNBTransactions } from "../data/transactions";
import { customer } from "../data/customer";
import { Tabs } from "@dnb/eufemia";
import Transactions from "../code/Transactions/AllTransactions/Transactions";

export const getAllTransactions = () => {
  const allCustomerTransactions = customer.accounts.flatMap(
    (account) => account.transactions
  );
  return allDNBTransactions.concat(allCustomerTransactions);
};

export function TransactionsPage() {
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
