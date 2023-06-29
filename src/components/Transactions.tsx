import React from "react";
import { AllTransactionsView } from "./AllTransactionsView";
import { H1, Section } from "@dnb/eufemia";

export default function Transactions() {
  return (
    <Section spacing="small" left right style_type="white">
      <div className="TransactionsTab">
        <H1>Oversikt over alle transaksjoner i DNB</H1>
        <AllTransactionsView />
      </div>
    </Section>
  );
}
