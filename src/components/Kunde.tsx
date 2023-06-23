import React from "react";

interface Kunde {
  fornavn: String;
  etternavn: String;
  personnummer: String;
}

export const overfør = (
  fra_konto: String,
  til_konto: String,
  beløp: Number,
  valuta: String
) => {};

export const betal = (
  fra_konto: String,
  til_konto: String,
  kid: String,
  beløp: Number,
  valuta: String
) => {};

export default function Kunde() {
  return (
    <div className="Kunde">
      <h1>Dette er en kunde!</h1>
    </div>
  );
}
