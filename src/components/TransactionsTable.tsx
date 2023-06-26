import React, { useState } from "react";
import "../styles.css";
import data from "../data/allTransactions.json";
import { Transaction, Person } from "../model/Transactions";

let transactions: Transaction[] = data.transactions;

const transactionsMap = (wantedTransactions: Transaction[]) => {
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

function filterTable(parameter: Parameter, value: string): Transaction[] {
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
  FROM_NAME,
  FROM_OCCUPATION,
  FROM_COUNTRY,
  TO_NAME,
  TO_OCCUPATION,
  TO_COUNTRY,
  AMOUNT,
  DATE,
}

function useInput({ type /*...*/ }) {
  const [value, setValue] = useState("");
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
    />
  );
  return [value, input];
}

export const TransactionsTable = () => {
  const [inputValue, setInputValue] = React.useState("");
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangeHandler} value={inputValue} />
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Fra</th>
            <th colSpan={3}>Til</th>
            <th rowSpan={2}>Beløp</th>
            <th rowSpan={2}>Dato</th>
          </tr>
          <tr>
            <th>Navn</th>
            <th>Yrke</th>
            <th>Land</th>
            <th>Navn</th>
            <th>Yrke</th>
            <th>Land</th>
          </tr>
        </thead>
        <tbody>
          {transactionsMap(filterTable(Parameter.FROM_NAME, inputValue))}
        </tbody>
      </table>
    </>
  );
};
