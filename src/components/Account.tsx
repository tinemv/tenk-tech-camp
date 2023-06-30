import React from "react";
import {
  Breadcrumb,
  Button,
  H1,
  H2,
  H3,
  NumberFormat,
  Section,
  Space,
} from "@dnb/eufemia";
import { Account, Transaction } from "../Models";
import { TransactionTable } from "./TransactionTable";
import { transfer_to, pay_from } from "@dnb/eufemia/icons";

export type AccountProps = {
  account: Account;
  setAccountClicked: Function;
};

export const findBalance = (transactions: Transaction[]) => {
  return transactions.reduce(
    (totalBalance, transaction) => totalBalance + transaction.amount,
    0
  );
};

export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;

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
      <Space top bottom>
        <Button
          icon={transfer_to}
          icon_position="left"
          size="large"
          text="Betal"
        ></Button>
        <Button
          variant="secondary"
          icon={pay_from}
          icon_position="left"
          size="large"
          left
          text="Overfør"
        ></Button>
      </Space>
      <Section style_type="lavender" spacing>
        <TransactionTable listOfTransactions={account.transactions} />
      </Section>
    </Section>
  );
}
