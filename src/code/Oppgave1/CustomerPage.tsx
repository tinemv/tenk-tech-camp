import React, { useEffect, useState } from "react";
import AccountTable from "../Ekstra/AccountTable";
import { customer } from "../../data/customer";
import ukjent from "./Profilbilder/ukjent.png";
import BTS from "./Profilbilder/BTS.png";
import EmmaWatson from "./Profilbilder/EmmaWatson.png";
import GirlInRed from "./Profilbilder/GirlInRed.png";
import GretaThunberg from "./Profilbilder/GretaThunberg.png";
import MarcusMartinus from "./Profilbilder/MarcusMartinus.png";
import MillieBobbyBrown from "./Profilbilder/MillieBobbyBrown.png";
import TaylorSwift from "./Profilbilder/TaylorSwift.png";
import Zendaya from "./Profilbilder/Zendaya.png";
import { H1, H2, Img, Section } from "@dnb/eufemia";
import "../../ignore/styles.css";
import AccountPage from "../../ignore/AccountPage";

export interface CustomerPageProps {
  setCurrentTab: Function;
}

/** CustomerPage er en funksjon som returnerer koden til kundesiden, sett når man logger inn som kunde */
export default function CustomerPage(props: CustomerPageProps) {
  const { setCurrentTab } = props;
  setCurrentTab("Kunde");
  const [accountClicked, setAccountClicked] = useState("Customer");

  return (
    <Section spacing="small" left right style_type="white">
      <div className="CustomerTab">
        {accountClicked === "Customer" && (
          <>
            {/* Oppgave 1A: Her kan du endre overskriften */}
            <H1>Velkommen ukjent!</H1>
            <Img
              /* Oppgave 1B: Her kan du endre bilde */
              src={ukjent}
              alt="User Picture"
              width="250rem"
              height="250rem"
              style={{ borderRadius: "50%" }}
              bottom
              top
            />
            <Section style_type="lavender" spacing>
              <H2 bottom>Kontoer</H2>
              <AccountTable
                accountList={customer.accounts}
                setAccountClicked={setAccountClicked}
              />
            </Section>
          </>
        )}

        {accountClicked !== "Customer" && (
          <>
            <AccountPage
              account={customer.accounts.find(
                (account) =>
                  account.name === accountClicked ||
                  account.accountNumber === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
