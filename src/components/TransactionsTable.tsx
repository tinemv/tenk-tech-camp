import React, { useState } from "react";
import "../styles.css";
import data from "../data/allTransactions.json";
import { Transaction, Person } from "../model/Transactions";
import Provider from "@dnb/eufemia/shared/Provider";
import { H2, NumberFormat, Table, Dropdown, Td, Th, Tr } from "@dnb/eufemia";

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
  FROM_NAME = "Avsenders navn",
  FROM_OCCUPATION = "Avsenders yrke",
  FROM_COUNTRY = "Avsenders land",
  TO_NAME = "Mottakers navn",
  TO_OCCUPATION = "Mottakers yrke",
  TO_COUNTRY = "Mottakers land",
  AMOUNT = "Beløp",
  DATE = "Dato",
}

export const TransactionsTable = () => {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const [inputParameter, setInputParameter] = React.useState(
    Parameter.FROM_NAME
  );

  return (
    <>
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
        on_change={({data}) => setInputParameter(data)}
      />
      <input type="text" onChange={handleInputText} value={inputText} />
      <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
        <Table.ScrollView
          style={{
            maxHeight: "54rem",
            width: "70rem",
          }}
        >
          <Table sticky="css-position">
            <thead>
              <Tr>
                <Th colSpan={3}>Avsender (Sendt fra)</Th>
                <Th colSpan={3}>Mottaker (Sendt til)</Th>
                <Th rowSpan={2}>Beløp</Th>
                <Th rowSpan={2}>Dato</Th>
              </Tr>
              <Tr>
                <Th>Navn</Th>
                <Th>Yrke</Th>
                <Th>Land</Th>
                <Th>Navn</Th>
                <Th>Yrke</Th>
                <Th>Land</Th>
              </Tr>
            </thead>
            <tbody>
              {transactionsMap(filterTable(inputParameter, inputText))}
            </tbody>
          </Table>
        </Table.ScrollView>
      </Provider>
    </>
  );
};
