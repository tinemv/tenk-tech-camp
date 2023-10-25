import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat } from "@dnb/eufemia";
import { Transaction } from "../../data/Models";

export type TransactionTableProps = {
  listOfTransactions: Transaction[];
};

/** Task 3C */
export function detectRiskCountry(country: String): String | undefined {
  if (country === "country") {
    return "Unknown";
  } else {
    return "Unknown";
  }
}

/** Task 3D */
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
        {/* Task 3: Here you can change the look and the content of the transactions table */}
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Sender's name</Th>
              <Th>Sender's country</Th>
              <Th>Recipient's name</Th>
              {/* Task 3B  */}
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
                {/*Task 3B */}
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
