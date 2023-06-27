import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Customer } from "../model/Customer";
import { H2, NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";

export interface AccountTableProps {
  customer: Customer;
}

export default function AccountTable(props: AccountTableProps) {
  const { customer } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <H2>Kontoer</H2>
      <Table.ScrollView
        style={{
          maxHeight: "24rem",
          width: "40rem",
        }}
      >
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Navn</Th>
              <Th>Kontonummer</Th>
              <Th>Saldo</Th>
            </Tr>
          </thead>
          <tbody>
            {customer.accounts.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.accountNumber}</Td>
                <Td>
                  <NumberFormat>{item.balance}</NumberFormat>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
}
