export var tasks = [
  {
    id: "1",
    title: "title 1",
    description: "description 1",
    subtask: {
      a: {
        description: "",
        hint: "",
      },
      b: {
        description: "",
        hint: "",
      },
    },
  },
  {
    id: "x",
    title: "Oppgave x",
    description: "Oppgave om transaksjoner i banken",
    subtask: {
      a: {
        description: "",
        hint: "",
      },
      b: {
        description: "Legg til en kolonne for en egen kommentar i tabellen og skriv en kommentar på en transaksjon som virker mistenkelig.",
        hint: "",
      },
      c: {
        description: "Prøv å filtrere tabellen med valgmenyen øverst. Filtrering på beløp fungerer ikke som det skal, prøv å fikse det så det fungere likt som de andre.",
        hint: "",
      },
      d: {
        description:
          "Finn den påbegynte funksjonen som heter findSuspectTransaction() i filen TransactionTable.tsx. Implementer en metode for å markere en rad rødt hvis transaksjonen kommer fra eller til et land med høy risiko (level 3).",
        hint: "",
      },
    },
  },
];
