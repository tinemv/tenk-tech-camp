import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Account } from "../../data/CustomerModel";
import { NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";
import { findBalance } from "../../ignore/AccountPage";

export interface AccountTableProps {
  accountList: Account[];
  setAccountClicked: Function;
}
export default function AccountTable(props: AccountTableProps) {
  const { accountList, setAccountClicked } = props;

  return (
    <>
      <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
        <Table.ScrollView
          style={{
            maxHeight: "50rem",
            width: "40rem",
          }}
        >
          <Table sticky="css-position">
            <thead>
              <Tr>
                <Th>Name</Th>
                <Th>Account number</Th>
                <Th>Balance</Th>
              </Tr>
            </thead>
            <tbody>
              {accountList.map((account) => (
                <Tr key={account.id}>
                  <Td>{getTransactionLink(account.name)}</Td>
                  <Td>
                    <NumberFormat ban>{account.number}</NumberFormat>
                  </Td>
                  <Td>
                    <NumberFormat currency>
                      {findBalance(account.transactions)}
                    </NumberFormat>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </Table.ScrollView>
      </Provider>
    </>
  );
  {
  }
  function getTransactionLink(accountIdentifier: String) {
    return (
      <button
        className="dnb-anchor"
        onClick={() => {
          setAccountClicked(accountIdentifier);
        }}
      >
        {accountIdentifier}
      </button>
    );
  }
}
