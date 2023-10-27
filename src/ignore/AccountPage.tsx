import React from "react";
import { Breadcrumb, H1, H2, H3, NumberFormat, Section } from "@dnb/eufemia";
import { Account, Transaction } from "./Models";
import { transfer_to, pay_from } from "@dnb/eufemia/icons";
import { TransactionTableForAccounts } from "./TransactionTableForAccounts";

export type AccountProps = {
  account: Account | undefined;
  setAccountClicked: Function;
};

{/**findBalance er en variabel som tilsier hvor mye penger som er på kontoen */}
export const findBalance = (transactions: Transaction[]) => {
  return transactions.reduce(
    (totalBalance, transaction) => totalBalance + transaction.amount,
    0
  );
};

{/**AccountPage er en funksjon vi bruker til å presentere selve kontosiden (du kan se kontosiden hvis du logger inn som kunde og trykker på et av kontonavnene) */}
export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;
  if (account == undefined) {
    return;
  }

  return (
    <Section spacing top bottom style_type="white">
      <Breadcrumb spacing>
        <Breadcrumb.Item
          text="Kontoer"
          variant="previous"
          onClick={() => {
            setAccountClicked("Customer");
          }}
        />
      </Breadcrumb>
      <H1>{account.name}</H1>
      <H3 style={{ fontWeight: "normal" }}>Saldo</H3>
      <H2>
        <NumberFormat currency>
          {findBalance(account.transactions)}
        </NumberFormat>
      </H2>
      <Section top style_type="lavender" spacing>
        <TransactionTableForAccounts
          listOfTransactions={account.transactions}
        />
      </Section>
    </Section>
  );
}
