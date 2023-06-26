import React from "react";
import AccountTable from "./AccountTable";
import { customers } from "../data/Customers";
import UserProfileIcon from "../assets/profile_icon.png";
import { Button } from "@dnb/eufemia";
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

export default function Kunde() {
  return (
    <>
      <div className="Kunde">
        <div className="dnb-core-style">
          <Button
            text="Default button"
            on_click={() => {
              console.log("on_click");
            }}
          />
        </div>
        <h1>Velkommen {customers[0].name}!</h1>
        <div id="circle">Bilde</div>
        <img src={UserProfileIcon} alt="Image" />
        <AccountTable customer={customers[0]} />
      </div>
    </>
  );
}
