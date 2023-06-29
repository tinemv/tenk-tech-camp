import React, { useState } from "react";
import "../styles.css";
import { allTransactions } from "../data/allTransactions";
import { Transaction, Person } from "../model/Transactions";
import { Dropdown, Input, Section } from "@dnb/eufemia";
import { TransactionTable } from "./TransactionTable";

let transactions: Transaction[] = allTransactions;

export const transactionsMap = (wantedTransactions: Transaction[]) => {
  return wantedTransactions.map((transaction) => (
    <tr>
      <td>{transaction.from.name}</td>
      <td>{transaction.from.country}</td>
      <td>{transaction.from.occupation}</td>

      <td>{transaction.to.name}</td>
      <td>{transaction.to.country}</td>
      <td>{transaction.to.occupation}</td>

      <td>{transaction.amount}</td>
      <td>{transaction.date}</td>
    </tr>
  ));
};

export function filterTable(
  parameter: Parameter,
  value: string
): Transaction[] {
  const filteredTransactions = [];
  if (value === "") {
    return transactions;
  }
  transactions.map((transaction) => {
    switch (parameter) {
      case Parameter.FROM_NAME:
        return transaction.from.name === value
          ? filteredTransactions.push(transaction)
          : undefined;
      case Parameter.FROM_OCCUPATION:
        return transaction.from.occupation === value
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
      case Parameter.TO_OCCUPATION:
        return transaction.to.occupation == value
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
      case Parameter.DATE:
        return transaction.date == value
          ? filteredTransactions.push(transaction)
          : undefined;
    }
  });
  console.log(filteredTransactions);
  return filteredTransactions;
}

enum Parameter {
  FROM_NAME = "Avsenders navn",
  FROM_OCCUPATION = "Avsenders yrke",
  FROM_COUNTRY = "Avsenders land",
  TO_NAME = "Mottakers navn",
  TO_OCCUPATION = "Mottakers yrke",
  TO_COUNTRY = "Mottakers land",
  AMOUNT = "Beløp",
  DATE = "Dato",
}

export const AllTransactionsView = () => {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const [inputParameter, setInputParameter] = React.useState(undefined);

  return (
    <Section style_type="white">
      <Section spacing>
        <Dropdown
          data={[
            Parameter.TO_NAME,
            Parameter.TO_OCCUPATION,
            Parameter.TO_COUNTRY,
            Parameter.FROM_NAME,
            Parameter.FROM_OCCUPATION,
            Parameter.FROM_COUNTRY,
            Parameter.AMOUNT,
            Parameter.DATE,
          ]}
          label="Velg parameter som skal filtreres på:"
          title="Velg parameter"
          on_change={({ data }) => setInputParameter(data)}
        />
        <Input
          space
          type="text"
          onChange={handleInputText}
          value={inputText}
          placeholder={`Parameter`}
        />
      </Section>{" "}
      <TransactionTable
        listOfTransactions={transactionsMap(
          filterTable(inputParameter, inputText)
        )}
      />
    </Section>
  );
};
