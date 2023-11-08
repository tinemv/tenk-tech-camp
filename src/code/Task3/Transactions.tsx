import React from "react";
import { Dropdown, H1, Input, Section, P } from "@dnb/eufemia";
import { TransactionTable } from "./TransactionTable";
import { filterTable } from "../../ignore/codeDump";

export enum Parameter {
  FROM_NAME = "Sender's name",
  FROM_COMPANY = "Sender's company",
  TO_NAME = "Recipient's name",
  TO_COMPANY = "Recipient's company",
  AMOUNT = "Amount",
  RISK = "Risk",
}

export default function Transactions() {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  const [inputParameter, setInputParameter] = React.useState(undefined);

  return (
    <Section spacing="small" left right style_type="white">
      <div className="TransactionsTab">
        <H1>Overview of all transactions</H1>
        {/* Task 3A */}
        <Section style_type="white">
          <Section spacing>
            <Dropdown
              data={[
                Parameter.FROM_NAME,
                Parameter.FROM_COMPANY,
                Parameter.TO_NAME,
                Parameter.AMOUNT,
                Parameter.RISK,
              ]}
              label="Parameter to be filtered on:"
              title="Choose parameter"
              on_change={({ data }) => setInputParameter(data)}
            />
            <Input
              space
              type="text"
              onChange={handleInputText}
              value={inputText}
              placeholder="Parameter"
            />
          </Section>{" "}
          <TransactionTable
            listOfTransactions={filterTable(inputParameter, inputText)}
          />
        </Section>
      </div>
    </Section>
  );
}
