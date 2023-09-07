import React, { useEffect, useState } from "react";
import AccountTable from "../Extra/AccountTable";
import { customer } from "../../data/customer";
import unknown from "./ProfilePictures/Unknown.png";
import BTS from "./ProfilePictures/BTS.png";
import EmmaWatson from "./ProfilePictures/EmmaWatson.png";
import GirlInRed from "./ProfilePictures/GirlInRed.png";
import GretaThunberg from "./ProfilePictures/GretaThunberg.png";
import MarcusMartinus from "./ProfilePictures/MarcusMartinus.png";
import MillieBobbyBrown from "./ProfilePictures/MillieBobbyBrown.png";
import TaylorSwift from "./ProfilePictures/TaylorSwift.png";
import Zendaya from "./ProfilePictures/Zendaya.png";
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
            {/* Task 1A: Change the header here */}
            <H1>Welcome unknown user!</H1>
            <Img
              /* Task 1B: Change the picture here */
              src={unknown}
              alt="User Picture"
              width="250rem"
              height="250rem"
              style={{ borderRadius: "50%" }}
              bottom
              top
            />
            <Section style_type="lavender" spacing>
              <H2 bottom>Accounts</H2>
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
                  account.number === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
