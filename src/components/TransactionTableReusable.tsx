import React from "react";
import "../styles.css";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr } from "@dnb/eufemia";

export type TransactionsTableReuseableProps = {
    listOfTransactions: any
}

export const TransactionsTableReusable = (props: TransactionsTableReuseableProps) => {
    const {listOfTransactions} = props
  return (
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
          {listOfTransactions}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
