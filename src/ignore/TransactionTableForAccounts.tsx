import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat, H2 } from "@dnb/eufemia";

export type TransactionTableForAccountsProps = {
  listOfTransactions: any;
};

export const TransactionTableForAccounts = (props: TransactionTableForAccountsProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "44rem",
        }}
      >
        <>
          <H2 bottom>Transactions</H2>
          <Table sticky="css-position">
            <thead>
              <Tr>
              <Th>Senders name</Th>
              <Th>Senders country</Th>
              <Th>Recipients name</Th>
              <Th>Recipients country</Th>
              <Th>Amount</Th>
              </Tr>
            </thead>
            <tbody>
              {listOfTransactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.from.name}</Td>
                  <Td>{transaction.from.country}</Td>
                  <Td>{transaction.to.name}</Td>
                  <Td>{transaction.to.country}</Td>
                  <Td>
                    <NumberFormat>{transaction.amount}</NumberFormat>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </>
      </Table.ScrollView>
    </Provider>
  );
};
