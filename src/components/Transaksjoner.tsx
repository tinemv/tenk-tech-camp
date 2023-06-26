import React from "react";
import { TransactionsTable } from "./TransactionsTable";

export default function Transaksjoner() {
  return (
    <div className="Transaksjoner">
      <h1>Dette er en oversikt over alle transaksjoner Transaksjoner!</h1>
      <TransactionsTable />
    </div>
  );
}
