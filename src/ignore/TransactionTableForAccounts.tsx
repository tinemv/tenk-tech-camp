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
          width: "65rem",
        }}
      >
        <>
          <H2 bottom>Transaksjoner</H2>
          <Table sticky="css-position">
            <thead>
              <Tr>
                <Th>Avsenders navn</Th>
                <Th>Avsender land</Th>
                <Th>Mottakers navn</Th>
                <Th>Mottakers land</Th>
                <Th>Beløp</Th>
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
