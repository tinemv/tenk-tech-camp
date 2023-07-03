import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td } from "@dnb/eufemia";

export type TransactionTableProps = {
  listOfTransactions: any;
};

export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;
  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "54rem",
          width: "65rem",
        }}
      >
        {/* OPPGAVE X: Her kan du endre på utseendet til transaksjoner-tabellen */}
        <Table sticky="css-position">
          <thead>
            {/*Her definerer vi hvilke kolonner vi skal ha i tabellen*/}
            <Tr>
              <Th colSpan={3}>Avsender (Sendt fra)</Th>
              <Th colSpan={3}>Mottaker (Sendt til)</Th>
              <Th rowSpan={2}>Risiko</Th>
              <Th rowSpan={2}>Beløp</Th>
              <Th rowSpan={2}>Dato</Th>
              <Th rowSpan={2}>Beskrivelse</Th>
            </Tr>
            <Tr>
              <Th>Navn</Th>
              <Th>Land</Th>
              <Th>Yrke</Th>
              <Th>Navn</Th>
              <Th>Land</Th>
              <Th>Yrke</Th>
            </Tr>
          </thead>
          <tbody>
            {/* Her definerer vi hva tabellen skal inneholde */}
            {listOfTransactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.from.name}</Td>
                <Td>{transaction.from.country}</Td>
                <Td>{transaction.from.occupation}</Td>

                <Td>{transaction.to.name}</Td>
                <Td>{transaction.to.country}</Td>
                <Td>{transaction.to.occupation}</Td>

                <Td>{transaction.risk}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.date}</Td>
                <Td>{transaction.description}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
