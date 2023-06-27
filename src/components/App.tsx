import React, { useState } from "react";
import "../styles.css";
import Kunde from "./Customer";
import Transaksjoner from "./Transactions";

export default function App() {
  const [clickedButton, setClickedButton] = useState("Kunde");

  const openTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  return (
    <>
      <div className="Menu">
        <button className="MenuTab" onClick={openTab} name="Kunde">
          Kunde
        </button>
        <button className="MenuTab" onClick={openTab} name="Transaksjoner">
          Transaksjoner
        </button>
      </div>
      {clickedButton == "Kunde" ? <Kunde /> : <Transaksjoner />}
    </>
  );
}
