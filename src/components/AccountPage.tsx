import React from "react";
import { Breadcrumb, H1, H2, Section } from "@dnb/eufemia";
import { Account } from "../model/Customer";
import { TransactionTable } from "./TransactionTable";
import { allTransactions } from "../data/allTransactions";
import { transactionsMap } from "./AllTransactionsView";

export type AccountProps = {
  account: Account;
  setAccountClicked: Function;
};

export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;

  return (
    <Section spacing top bottom style_type="white">
      <Breadcrumb spacing>
        <Breadcrumb.Item
          variant="home"
          text="Kunde"
          onClick={() => {
            setAccountClicked("Customer");
          }}
        />
        <Breadcrumb.Item text="Konto" variant="previous" />
        <Breadcrumb.Item text={account.name} variant="current" />
      </Breadcrumb>
      <H2>Transaksjoner for {account.name}</H2>
      <TransactionTable listOfTransactions={transactionsMap(allTransactions)} />
    </Section>
  );
}
