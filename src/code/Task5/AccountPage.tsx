import React from "react";
import { Breadcrumb, H1, H2, H3, NumberFormat, Section, Dropdown } from "@dnb/eufemia";
import { Account, Transaction } from "../../data/CustomerModel";
import { TransactionTableForAccounts } from "../../ignore/TransactionTableForAccounts";
import { BubbleSort } from "./SortingAlgorithm";




export type AccountProps = {
  account: Account | undefined;
  setAccountClicked: Function;
};



export enum CategoryEnum {
  DESCRIPTION = "Description",
  DATE = "Date",
  AMOUNT = "Amount",
}


export const findBalance = (transactions: Transaction[]) => {
  return transactions.reduce(
    (totalBalance, transaction) => totalBalance + Number(transaction.amount),
    0
  );
};

export default function AccountPage(props: AccountProps) {
  const { account, setAccountClicked } = props;
  if (account == undefined) {
    return;
  }
  const [category, setCategory] = React.useState(undefined);
  const [transactionList, setTransactionList] = React.useState<Transaction[]>(account.transactions);


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
      <Section top spacing>
            <Dropdown
              data={[
                CategoryEnum.DESCRIPTION,
                CategoryEnum.DATE,
                CategoryEnum.AMOUNT,
              ]}
              label= "Sort by"
              title="Select parameter"
              on_change = {({ data }) => setCategory(data)}
            />
        </Section> 
        <TransactionTableForAccounts
        /** Task 5B */
        listOfTransactions={transactionList}
        />
    </Section>
  );
}