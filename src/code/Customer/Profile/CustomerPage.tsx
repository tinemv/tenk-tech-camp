import React, { useState } from "react";
import AccountTable from "./AccountTable";
import { customer } from "../../../data/customer";
import profile_picture from "../../../profile_pictures/Kjersti_Braathen.jpg";
import { H1, H2, Img, Section } from "@dnb/eufemia";
import "../../../ignore/styles.css";
import AccountPage from "../Account/AccountPage";

export default function CustomerPage() {
  const [accountClicked, setAccountClicked] = useState("Customer");

  return (
    <Section spacing="small" left right style_type="white">
      <div className="CustomerTab">
        {accountClicked === "Customer" && (
          <>
            <H1>Velkommen {customer.name}!</H1>
            <Img
              src={profile_picture}
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
                (account) => account.name === accountClicked
              )}
              setAccountClicked={setAccountClicked}
            />
          </>
        )}
      </div>
    </Section>
  );
}
