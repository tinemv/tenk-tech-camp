import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Account } from "../../ignore/Models";
import { NumberFormat, Table, Td, Th, Tr } from "@dnb/eufemia";
import { findBalance } from "../../ignore/AccountPage";

export interface AccountTableProps {
  accountList: Account[] /*listen over alle kundens kontoer */;
  setAccountClicked: Function /*en funksjon som sjekker om kontoen har blitt klikket på tidligere */;
}
/** AccountTable er en funksjon som returnerer koden til kontotabellen under kundens bilde.*/
export default function AccountTable(props: AccountTableProps) {
  const { accountList, setAccountClicked } = props;

  return (
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
              <Th>Navn</Th>
              <Th>Kontonummer</Th>
              <Th>Saldo</Th>
            </Tr>
          </thead>
          <tbody>
            {accountList.map((account) => (
              <Tr key={account.id}>
                <Td>{getTransactionLink(account.name)}</Td>
                <Td>
                  {/* <NumberFormat ban>{account.accountNumber}</NumberFormat> */}
                  {getTransactionLink(account.accountNumber)}
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
  );
  {
    /** En funksjon som returnerer ett knappelement med link til transaksjonslisten til en konto.
     Tar kontoattributtet som skal være klikkbart som argument */
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
