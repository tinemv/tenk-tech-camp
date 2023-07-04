import React from "react";
import {
  Breadcrumb,
  Button,
  Dialog,
  H1,
  H2,
  H3,
  Modal,
  NumberFormat,
  Section,
  Space,
} from "@dnb/eufemia";
import { Account, Transaction } from "../../../ignore/Models";
import { TransactionTable } from "../../Transactions/AllTransactions/TransactionTable";
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
        <Dialog
          title="Betal"
          trigger={(props) => (
            <Button
              {...props}
              icon={transfer_to}
              icon_position="left"
              size="large"
              text="Betal"
              variant="primary"
            ></Button>
          )}
        >
          Si hvem du vil betale penger til.
        </Dialog>
        <Dialog
          title="Overfør"
          trigger={(props) => (
            <Button
              {...props}
              icon={pay_from}
              icon_position="left"
              size="large"
              text="Overfør"
              variant="secondary"
              left
            ></Button>
          )}
        >
          Si hvem du vil overføre penger til.
        </Dialog>
      </Space>
      <Section style_type="lavender" spacing>
        <TransactionTable listOfTransactions={account.transactions} />
      </Section>
    </Section>
  );
}
