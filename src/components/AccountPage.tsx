import React from "react";
import { Breadcrumb, Button, H2, Section } from "@dnb/eufemia";
import { Account } from "../Models";
import { TransactionTable } from "./TransactionTable";

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
      <Button
        icon_position="left"
        icon="chevron_left"
        onClick={() => {
          setAccountClicked("Customer");
        }}
      >
        Back
      </Button>
      <H2>Transaksjoner for {account.name}</H2>
      <TransactionTable listOfTransactions={account.transactions} />
    </Section>
  );
}
