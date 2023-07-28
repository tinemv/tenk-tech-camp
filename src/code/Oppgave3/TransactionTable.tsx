import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat } from "@dnb/eufemia";
import { Transaction } from "../../ignore/Models";

export type TransactionTableProps = {
  listOfTransactions: Transaction[];
};

/** OPPGAVE 3C: du har funnet funksjonen du skal endre på! */
export function detectRiskCountry(country: String): String | undefined {
  /* Fjern denne linjen for å få koden din til å funke!

  if (country === land ){
    return "HØY" eller "LAV";
  } else {
    return "HØY" eller "LAV";
  }

  Fjern denne linjen for å få koden din til å funke!*/

  return "Ukjent";
}

/** OPPGAVE 3D */
function setColorForHighRisk(risk: String): any {
  return "black";
}

/** Transactions returnerer koden som visualiserer transaksjonstabellen mellom alle kunder. Logg inn som etterforsker og trykk på fanen hvor det står Transaksjoner for å se resultatet på denne koden */
export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "60rem",
        }}
      >
        {/* OPPGAVE X: Her kan du endre på utseendet og innholdet til transaksjoner-tabellen */}
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Avsenders navn</Th>
              <Th>Avsenders land</Th>
              <Th>Mottakers navn</Th>
              {/*Oppgave 3B: legg til overskrift her */}
              <Th>Beløp</Th>
              <Th>Risiko</Th>
            </Tr>
          </thead>
          <tbody>
            {listOfTransactions.map((transaction) => (
              <Tr key={transaction.id.toString()}>
                <Td>{transaction.from.name}</Td>
                <Td>{transaction.from.country}</Td>
                <Td>{transaction.to.name}</Td>
                {/*Oppgave 3B: legg til innhold her */}
                <Td>
                  <NumberFormat>{transaction.amount}</NumberFormat>
                </Td>
                <Td
                  style={{
                    color: setColorForHighRisk(
                      detectRiskCountry(transaction.to.country)
                    ),
                  }}
                >
                  {detectRiskCountry(transaction.to.country)}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
