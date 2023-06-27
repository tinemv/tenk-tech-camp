import React from "react";
import AccountTable from "./AccountTable";
import { customers } from "../data/Customers";
import UserProfileIcon from "../assets/profile_icon.png";
import { Avatar, Button, Logo } from "@dnb/eufemia";
import "@dnb/eufemia/components/button/style";
import "@dnb/eufemia/components/button/style/themes/ui";

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

export default function Customer(path) {
  return (
    <>
      <div className="Kunde">
        <h1>Velkommen {customers[0].name}!</h1>
        <Avatar src={UserProfileIcon} alt="Icon" size="large" />
        <span
          style={{
            fontSize: "4rem",
          }}
        >
          <Logo size="inherit" brand="ui" />
        </span>
        {/* <div id="circle">Bilde</div> */}
        <AccountTable customer={customers[0]} />
      </div>
    </>
  );
}
