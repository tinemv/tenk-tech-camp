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

export const TransactionsTable = () => {
  return (
    <>
      <table className="table-auto border">
        <thead>
          <th>From</th>
          <th>Country</th>
          <th>Occupation</th>
          <th>To</th>
          <th>Country</th>
          <th>COccupation</th>
          <th>Amount</th>
          <th>Date</th>
        </thead>
        <tbody>{transactionsMap}</tbody>
      </table>
    </>
  );
};
