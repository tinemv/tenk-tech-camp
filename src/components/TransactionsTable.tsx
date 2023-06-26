import React from "react";
import "../styles.css";
import data from "../data/allTransactions.json";
import { Transaction, Person } from "../model/Transactions";

let transactions: Transaction[] = data.transactions;

const transactionsMap = transactions.map((transaction) => (
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

function filterTable(parameter: Parameter): string {
  transactions.filter((transaction) => {
    switch (parameter) {
    }
  });

  return "hei";
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

export const TransactionsTable = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan={3}>From</th>
            <th colSpan={3}>To</th>
            <th rowSpan={2}>Amount</th>
            <th rowSpan={2}>Date</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Country</th>
            <th>Name</th>
            <th>Occupation</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>{transactionsMap}</tbody>
      </table>
    </>
  );
};
