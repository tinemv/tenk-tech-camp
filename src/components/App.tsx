import React, { useState } from "react";
import "../styles.css";
import Customer from "./Customer";
import Transaksjoner from "./Transaksjoner";
import { Logo, Tabs } from "@dnb/eufemia";
import { Router, useLocation } from "react-router-dom";

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
      {clickedButton == "Kunde" ? <Customer /> : <Transaksjoner />}
    </>
  );

  /* const { pathname } = useLocation();
  return (
    <Tabs
      data={[
        {
          title: "Home",
          key: "/",
        },
        {
          title: "About",
          key: "/about",
        },
      ]}
      selected_key={pathname}
      on_change={({ key }) => navigate(key)}
      tabs_style="mint-green"
    >
      <React.Suspense fallback={<em>Loading ...</em>}>
        <Router location={""} navigator={undefined}>
          <Customer path="/" default />
          <Transaksjoner path="/about" />
        </Router>
      </React.Suspense>
    </Tabs>
  ); */
}
