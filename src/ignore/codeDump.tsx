import React from "react";
import { allDNBTransactions } from "../data/transactions";
import { customer } from "../data/customer";
import { H1, H2, Section, Tabs } from "@dnb/eufemia";
import Transactions from "../code/Transactions/AllTransactions/Transactions";
import { Transaction } from "../ignore/Models";
import { Parameter } from "../code/Transactions/AllTransactions/Transactions";
import { detectRiskCountry } from "../code/Transactions/AllTransactions/TransactionTable";

export const getAllTransactions = () => {
  const allCustomerTransactions = customer.accounts.flatMap(
    (account) => account.transactions
  );
  return allDNBTransactions.concat(allCustomerTransactions);
};

export function TransactionsPage() {
  return (
    <Section spacing top bottom style_type="white">
      <H2 top={0} bottom>
        <Tabs>
          <Tabs.Content title="Dashboard">Et dashboard</Tabs.Content>
          <Tabs.Content title="Transaksjoner">
            <div className="TransactionsTab">
              <Transactions />
            </div>
          </Tabs.Content>
        </Tabs>
      </H2>
    </Section>
  );
}

export function filterTable(
  parameter: Parameter | undefined,
  value: string
): Transaction[] {
  const filteredTransactions: Transaction[] = [];
  const allTransactions = getAllTransactions();
  if (value === "") {
    return allTransactions;
  }
  allTransactions.map((transaction) => {
    switch (parameter) {
      case Parameter.FROM_NAME:
        return transaction.from.name === value
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.FROM_COUNTRY:
        return transaction.from.country == value
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.TO_NAME:
        return transaction.to.name == value
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.TO_COUNTRY:
        return transaction.to.country == value
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.AMOUNT:
        return transaction.amount == +value
          ? filteredTransactions.push(transaction)
          : undefined;
          case Parameter.RISK:
            return detectRiskCountry(
              transaction.from.country,
              transaction.to.country
            ) == value
              ? filteredTransactions.push(transaction)
              : undefined;
    }
  });
  return filteredTransactions;
}


export function TheoryPage() {
  return <H1>Teori</H1>;
}
