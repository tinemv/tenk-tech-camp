import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat } from "@dnb/eufemia";

export type TransactionTableProps = {
  listOfTransactions: any;
};

export function detectRiskCountry(fromCountry, toCountry): String | undefined {
  {/** OPPGAVE X */}

  /* Fjern denne linjen for å få koden din til å kjøre!

  if (fromCountry ... || toCountry ... ){
    return 'HØY eller LAV?';
  } else {
    return 'HØY eller LAV?';
  }

  Fjern denne linjen for å få koden din til å kjøre!*/

  return 'Ukjent';
}

function setColorForHighRisk(risk): any {
  {/** OPPGAVE X */}
  return 'black';
}

export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "44rem",
          width: "65rem",
        }}
      >
        {/* OPPGAVE X: Her kan du endre på utseendet og innholdet til transaksjoner-tabellen */}
        <Table sticky="css-position">
          <thead>
            <Tr>
              <Th>Avsenders navn</Th>
              <Th>Mottakers navn</Th>
              <Th>Beløp</Th>
              <Th>Risiko</Th>
              {/*Oppgave 3b: legg til to nye overskrifter her! Avsenders og Mottakers land*/}
            </Tr>
          </thead>
          <tbody>
            {listOfTransactions.map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{transaction.from.name}</Td>
                <Td>{transaction.to.name}</Td>
                <Td><NumberFormat>{transaction.amount}</NumberFormat></Td>
                <Td
                  style={{
                    color: setColorForHighRisk(
                      detectRiskCountry(
                        transaction.from.country,
                        transaction.to.country
                      )
                    ),
                  }}
                >
                  {detectRiskCountry(
                    transaction.from.country,
                    transaction.to.country
                  )}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Table.ScrollView>
    </Provider>
  );
};
