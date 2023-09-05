import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat } from "@dnb/eufemia";
import { Transaction } from "../../ignore/Models";

export type TransactionTableProps = {
  listOfTransactions: Transaction[];
};

/** OPPGAVE 3C: */
export function detectRiskCountry(country: String): String | undefined {

  if (country === "land" ){
    return "Ukjent";
  } else {
    return "Ukjent";
  }
}

/** Assignment 3D */
function setColorForHighRisk(risk: String): any {
  return "black";
}

export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "60rem",
        }}
      >
        {/* Assignment 3: Here you can change the look and the content of the transactions table */}
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Senders name</Th>
              <Th>Senders country</Th>
              <Th>Recipients name</Th>
              {/*Oppgave 3B: header */}
              <Th>Amount</Th>
              <Th>Risk</Th>
            </Tr>
          </thead>
          <tbody>
            {listOfTransactions.map((transaction) => (
              <Tr key={transaction.id.toString()}>
                <Td>{transaction.from.name}</Td>
                <Td>{transaction.from.country}</Td>
                <Td>{transaction.to.name}</Td>
                {/*Oppgave 3B: content */}
                <Td>
                  <NumberFormat>{transaction.amount}</NumberFormat>
                </Td>
                <Td
                  style={{
                    color: setColorForHighRisk(
                      detectRiskCountry(transaction.to.country)
                    ),
                  }}
                >
                  {detectRiskCountry(transaction.to.country)}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
