import React from "react";
import Provider from "@dnb/eufemia/shared/Provider";
import { Table, Th, Tr, Td, NumberFormat, CountryFlag } from "@dnb/eufemia";
import { Transaction } from "../../ignore/Models";

export type TransactionTableProps = {
  listOfTransactions: Transaction[];
};

  const countryCodes = new Map<string, string>();
  countryCodes.set('Norge', 'NO');
  countryCodes.set('Sverige', 'SE');
  countryCodes.set('USA', 'US');
  countryCodes.set('Italia', 'IT');
  countryCodes.set('Spania', 'ES');
  countryCodes.set('Danmark', 'DK');
  countryCodes.set('Russland', 'RU');

  {Array.from(countryCodes).map(([country, countryCode]) => (
  <Tr key={country}>
    <Td>{country}</Td>
    <Td>{countryCode}</Td>
  </Tr>
))}

/** OPPGAVE 3C: */
export function detectRiskCountry(country: String): String | undefined {

  if (country === "land" ){
    return "Ukjent";
  } else {
    return "Ukjent";
  }
}

/** OPPGAVE 3D */
function setColorForHighRisk(risk: String): any {
  return "black";
}

/** Transactions returnerer koden som visualiserer transaksjonstabellen mellom alle kunder. 
 * Trykk på "Detaljer" under "Transaksjoner"-fanen for å se resultatet av denne koden */
export const TransactionTable = (props: TransactionTableProps) => {
  const { listOfTransactions } = props;

  return (
    <Provider locale="nb-NO" NumberFormat={{ currency: "NOK" }}>
      <Table.ScrollView
        style={{
          maxHeight: "60rem",
        }}
      >
        {/* Oppgave 3: Her kan du endre på utseendet og innholdet til transaksjoner-tabellen */}
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
                <Td>
                  <CountryFlag iso={countryCodes.get(transaction.from.country.toString())} size="large" />
                </Td>
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
