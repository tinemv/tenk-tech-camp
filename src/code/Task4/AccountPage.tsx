import React from "react";
import { Breadcrumb, H1, H2, H3, NumberFormat, Section, Dropdown } from "@dnb/eufemia";
import { Account, Transaction } from "../../data/Models";
import { TransactionTableForAccounts } from "../../ignore/TransactionTableForAccounts";




export type AccountProps = {
  account: Account | undefined;
  setAccountClicked: Function;
};



export enum Parameter {
  FROM_NAME = "Sender's name",
  FROM_COUNTRY = "Sender's country",
  TO_NAME = "Recipient's name",
  TO_COUNTRY = "Recipient's country",
  AMOUNT = "Amount",
  RISK = 'Risk'
}


export const findBalance = (transactions: Transaction[]) => {
  return transactions.reduce(
    (totalBalance, transaction) => totalBalance + transaction.amount,
    0
  );
};

export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;
  if (account == undefined) {
    return;
  }
  const [inputParameter, setInputParameter] = React.useState(undefined);
  const [lst, setLst] = React.useState<Transaction[]>(account.transactions);


  return (
    <Section spacing top bottom style_type="white">
      <Breadcrumb spacing>
        <Breadcrumb.Item
          text="Accounts"
          variant="previous"
          onClick={() => {
            setAccountClicked("Customer");
          }}
        />
      </Breadcrumb>
      <H1>{account.name}</H1>
      <H3 style={{ fontWeight: "normal" }}>Balance</H3>
      <H2>
        <NumberFormat currency>
          {findBalance(account.transactions)}
        </NumberFormat>
      </H2>
      <Section top style_type="lavender" spacing>
      <Section spacing>
            <Dropdown
              data={[
                Parameter.FROM_NAME,
                Parameter.TO_NAME,
                Parameter.AMOUNT,
                Parameter.FROM_COUNTRY
              ]}
              label= "Sort by"
              title="Select parameter"
              on_change = {({ data }) => setInputParameter(data)}
            />
          </Section>{" "}
        </Section> 
        <TransactionTableForAccounts
        /** Task 4B */
        listOfTransactions={lst}
        />
    </Section>
  );
}