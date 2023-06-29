import React, { useState } from "react";
import AccountTable from "./AccountTable";
import { customer } from "../data/customerData";
import profile_picture from "../assets/Kjersti_Braathen.jpg";
import { H1, Img, Section } from "@dnb/eufemia";
import "../styles.css";
import AccountPage from "./AccountPage";

export default function Customer() {
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
            />
            <AccountTable
              accountList={customer.accounts}
              setAccountClicked={setAccountClicked}
            />
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
