import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Account } from "../model/Customer";
import { H2, NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";

export interface AccountTableProps {
  accountList: Account[];
  setAccountClicked: Function;
}

export default function AccountTable(props: AccountTableProps) {
  const { accountList, setAccountClicked } = props;

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
            {accountList.map((item) => (
              <Tr key={item.id}>
                <Td>
                  <button
                    className="dnb-anchor"
                    onClick={() => {
                      setAccountClicked(item.name);
                    }}
                  >
                    {item.name}
                  </button>
                </Td>
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
