import React from "react";
import { Dropdown, H1, Input, Section, P } from "@dnb/eufemia";
import { TransactionTable } from "./TransactionTable";
import { filterTable } from "../../ignore/codeDump";

export enum Parameter {
  FROM_NAME = "Avsenders navn",
  FROM_COUNTRY = "Avsenders land",
  TO_NAME = "Mottakers navn",
  TO_COUNTRY = "Mottakers land",
  AMOUNT = "Beløp",
  RISK = 'Risiko'
}

/** Transactions returnerer koden som visualiserer transaksjonssiden mellom alle kunder. Logg inn som etterforsker og trykk på fanen hvor det står Transaksjoner for å se resultatet på denne koden */
export default function Transactions() {
  const [inputText, setInputText] = React.useState("");
  const handleInputText = (event) => {
    setInputText(event.target.value);
  };
  const [inputParameter, setInputParameter] = React.useState(undefined);

  return (
    <Section spacing="small" left right style_type="white">
      <div className="TransactionsTab">
        <H1>Oversikt over alle transaksjoner i DNB</H1>
        {/* Oppgave 3A: legg til en paragraf her! */}
        <Section style_type="white">
          <Section spacing>
            <Dropdown
              data={[
                Parameter.TO_NAME,
                Parameter.TO_COUNTRY,
                Parameter.FROM_NAME,
                Parameter.FROM_COUNTRY,
                Parameter.AMOUNT,
              ]}
              label="Parameter som skal filtreres på:"
              title="Velg parameter"
              on_change={({ data }) => setInputParameter(data)}
            />
            <Input
              space
              type="text"
              onChange={handleInputText}
              value={inputText}
              placeholder={`Parameter`}
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
