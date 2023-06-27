import React from "react";
import { Customer } from "../model/Customer";
import Provider from "@dnb/eufemia/shared/Provider";
import { NumberFormat } from "@dnb/eufemia";

export interface AccountTableProps {
  customer: Customer;
}

export default function AccountTable(props: AccountTableProps) {
  const { customer } = props;
  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <h3>Kontoer</h3>
      <table key={customer.name}>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Kontonummer</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {customer.accounts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.accountNumber}</td>
              <td>
                <NumberFormat>{item.balance}</NumberFormat>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Provider>
  );
}